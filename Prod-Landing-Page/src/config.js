import { useState, useEffect } from 'react';
import { BASE_URL } from "./Constant";

const defaultConfig = {

  navConfig: {
    logo: "",
    useCases: [],
    cta: { text: "", link: "" },
  },
  heroConfig: {
    title: "",
    subtitle: "",
    bgImage: "",
    buttonText: "",
  },
  featureConfig: {
    heading: {
      title: "",
      subtitle: "",
      description: "",
    },
    features: [],
  },
  kpiConfig: {
    heading: {
      title: "",
      description: "",
    },
    kpis: [],
  },
  videoConfig: {
    heading: {
      title: "",
      description: "",
    },
    videoSrc: "",
  },
  trustConfig: {
    title: "",
    images: [],
  },
  articlesConfig: [],
  footerConfig: {
    logo: "",
    content: "",
    buttons: [],
    socialImages: [],
    products: { title: "", links: [] },
    company: { title: "", links: [] },
    resources: { title: "", links: [] },
    security: { title: "", links: [] },
    help: { title: "", links: [] },
  },
  ctaConfig: {
    heading: "",
    content: "",
    button: {
      text: "",
      link: "",
    },
    image: "",
  },
  tailorConfig: {
    heading:{
      title: "Tailor-Made Intelligence for Every Industry",
      subtitle:"Adapts to the unique needs of every sector, delivering actionable insights & boosting efficiency across industries",
      // spann:"trust"
    },
    cards: [
      {
        image: "https://www.shutterstock.com/image-illustration/ccpa-california-consumer-privacy-act-600nw-2120684813.jpg",
        heading: "CCPA Compliant",
        content: "We adhere to the California Consumer Privacy Act to ensure your data privacy."
      },
      {
        image: "https://www.loginradius.com/wp-content/uploads/2019/10/PNG_GDPR-e1672263252689.png",
        heading: "GDPR Certified",
        content: "Compliant with General Data Protection Regulation for enhanced user data protection."
      },
      {
        image: "https://img.freepik.com/premium-vector/iso-certified-badge-with-globe_1135235-1978.jpg?semt=ais_hybrid",
        heading: "ISO Certified",
        content: "Internationally recognized standards for quality and security assurance."
      },
      {
        image: "https://practicesuite.com/wp-content/uploads/2023/02/HIPPA1.jpg",
        heading: "HIPAA Compliance",
        content: "Fully compliant with HIPAA for protecting sensitive health information."
      },
    ],
  }

};

let config = { ...defaultConfig };

export const useConfig = (siteId) => {

  const [configData, setConfigData] = useState(config);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/data`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'siteid': siteId
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch config data: ${response.statusText}`);
        }

        const { data } = await response.json();
        console.log("raw_data",data);
        
        const newConfig = {
         
          navConfig: {
            logo: data.topNavConfig?.Logo_URL || defaultConfig.navConfig.logo,  // Changed from logo
            useCases: data.topNavConfig?.use_cases || defaultConfig.navConfig.useCases,  // Changed from useCases
            cta: {
              text: data.topNavConfig?.CTA_Text || defaultConfig.navConfig.cta.text,  // Changed from cta.text
              link: data.topNavConfig?.CTA_Link || defaultConfig.navConfig.cta.link,  // Changed from cta.link
            }
          },
          heroConfig: {
            title: data.heroConfig?.Hero_title || defaultConfig.heroConfig.title,  // Changed from title
            subtitle: data.heroConfig?.Hero_subtitle || defaultConfig.heroConfig.subtitle,  // Changed from subtitle
            bgImage: data.heroConfig?.Bg_Img_URL || defaultConfig.heroConfig.bgImage,  // Changed from bgImage
            buttonText: data.heroConfig?.ButtonText || defaultConfig.heroConfig.buttonText,  // Changed from buttonText
            selectedHero:data.heroConfig?.selectedHero || ''
          },
          featureConfig: {
            heading: {
              title: data.featuresConfig?.heading?.title || defaultConfig.featureConfig.heading.title,
              subtitle: data.featuresConfig?.heading?.subtitle || defaultConfig.featureConfig.heading.subtitle,
              description: data.featuresConfig?.heading?.description || defaultConfig.featureConfig.heading.description,
            },
            features: data.featuresConfig?.features?.map(feature => ({
              id: feature.id,
              title: feature.title,
              subtitle: feature.subtitle,
              image: feature.image,
              buttonText: feature.buttonText,
              isImageLeft: feature.isImageLeft,
            })) || defaultConfig.featureConfig.features,
          },
          kpiConfig: data.kpiConfig || defaultConfig.kpiConfig,  // Direct mapping as structure matches
          videoConfig: {
            heading: data.videoConfig?.heading || defaultConfig.videoConfig.heading,
            videoSrc: data.videoConfig?.videoSrc || defaultConfig.videoConfig.videoSrc,
          },
          trustConfig: data.trustConfig || defaultConfig.trustConfig,  // Direct mapping as structure matches
          articlesConfig: data.articleConfig || defaultConfig.articlesConfig,  // Direct mapping
          footerConfig: data.footerConfig || defaultConfig.footerConfig,  // Direct mapping as structure matches
          ctaConfig: data.ctaConfig || defaultConfig.ctaConfig,  // Remove ctaConfig nesting
          tailorConfig:data.tailorConfig || defaultConfig.tailorConfig
        };
        
        console.log(newConfig);
        

        setConfigData(newConfig);
        config = newConfig; // Update the shared config object
      } catch (error) {
        console.error("Error fetching config:", error);
        setConfigData(defaultConfig);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [siteId]);

  const updateConfig = (section, newData) => {
    if (configData.hasOwnProperty(section)) {
      const updatedConfig = {
        ...configData,
        [section]: { ...configData[section], ...newData }
      };
      setConfigData(updatedConfig);
      config = updatedConfig; // Update the shared config object
      return true;
    }
    return false;
  };

  return { config: configData, loading, updateConfig };

};

// Helper functions
const getConfig = () => config;



export {
  getConfig,
  defaultConfig
};

export default config;
