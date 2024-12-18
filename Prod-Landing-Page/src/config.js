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
    image: "https://i.pinimg.com/originals/f3/4a/85/f34a85aa08d22de4b9e70b5fae468f14.gif", // Replace with your preferred image URL
  },
 
};
  
const fetchConfigData = async () => {
  try {
    // Fetch the config data from the API endpoint
    const response = await fetch("/api/config"); // Replace with your actual endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch config data");
    }

    // Parse the response into JSON
    const newConfigData = await response.json();

    // Directly update the config object with the new data
    Object.assign(config, newConfigData); // Merge the existing config with the fetched data
    console.log("Updated config:", config);

  } catch (error) {
    console.error("Error fetching config:", error);
  }
};

// Initialize and fetch config data when the app starts (if needed)
fetchConfigData();

export default config 