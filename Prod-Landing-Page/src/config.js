// src/config.js
const config = {
  navConfig: {
    logo: "/logo.png",
    useCases: ["Use Case 1", "Use Case 2", "Use Case 3"],
    cta: { text: "Get Started", link: "#cta" },
  },
  heroConfig: {
    title: "Welcome to Our Website",
    subtitle: "We provide amazing solutions to help your business grow.",
    bgImage:
      "https://t4.ftcdn.net/jpg/08/52/61/01/360_F_852610192_mDCPHk42G9qHrROdQYx93eHuk5AMFpQQ.jpg",
    buttonText: "Get Started",
  },
  featureConfig: {
    heading: {
      title: "Amazing Features",
      subtitle: "Explore now",
      description: "Discover the top features we offer.",
    },
    features: [
      {
        id: 1,
        title: "Gain Insights",
        subtitle: "Transform your business with data-driven decisions.",
        image: "https://via.placeholder.com/300",
        buttonText: "Learn More",
        isImageLeft: true,
      },
      {
        id: 2,
        title: "Discover Opportunities",
        subtitle: "Uncover new growth areas for your business.",
        image: "https://via.placeholder.com/300",
        buttonText: "Explore",
        isImageLeft: false,
      },
    ],
  },
};

export default config;
