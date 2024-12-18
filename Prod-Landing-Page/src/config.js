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
   ctaConfig: {
     heading: "",
     content: "",
     button: {
       text: "",
       link: "",
     },
     image: "",
   }
 },
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

       const result = await response.json();
       const data = result.data;

       const newConfig = {
         navConfig: {
           logo: data.topNavConfig?.Logo_URL || defaultConfig.navConfig.logo,
           useCases: data.topNavConfig?.use_cases || defaultConfig.navConfig.useCases,
           cta: {
             text: data.topNavConfig?.CTA_Text || defaultConfig.navConfig.cta.text,
             link: data.topNavConfig?.CTA_Link || defaultConfig.navConfig.cta.link,
           }
         },
         heroConfig: {
           title: data.heroConfig?.Hero_title || defaultConfig.heroConfig.title,
           subtitle: data.heroConfig?.Hero_subtitle || defaultConfig.heroConfig.subtitle,
           bgImage: data.heroConfig?.Bg_Img_URL || defaultConfig.heroConfig.bgImage,
           buttonText: data.heroConfig?.ButtonText || defaultConfig.heroConfig.buttonText,
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
         kpiConfig: data.kpiConfig || defaultConfig.kpiConfig,
         videoConfig: {
           heading: data.videoConfig?.heading || defaultConfig.videoConfig.heading,
           videoSrc: data.videoConfig?.videoSrc || defaultConfig.videoConfig.videoSrc,
         },
         trustConfig: data.trustConfig || defaultConfig.trustConfig,
         articlesConfig: data.articleConfig || defaultConfig.articlesConfig,
         footerConfig: data.footerConfig || defaultConfig.footerConfig,
         ctaConfig: data.ctaConfig || defaultConfig.ctaConfig
       };

       setConfigData(newConfig);
       config = newConfig;
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
     config = updatedConfig;
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
