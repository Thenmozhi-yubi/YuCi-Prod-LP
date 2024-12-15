const config = {
  navConfig: {
    logo: "/logo.png",
    useCases: ["Use Case 1", "Use Case 2", "Use Case 3"],
    cta: { text: "Get Started", link: "#cta" },
  },
  heroConfig: {
    title: "Welcome to Our Website",
    subtitle: "We provide amazing solutions to help your business grow.",
    bgImage: "https://i.pinimg.com/originals/7c/1d/ab/7c1dab157f34e603487b5d0b057da448.gif",
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
        image: "https://assets-v2.lottiefiles.com/a/e84e8ee6-1170-11ee-9647-d3729348d81a/WnrwQzHsg9.gif",
        buttonText: "Learn More",
        isImageLeft: true,
      },
      {
        id: 2,
        title: "Discover Opportunities",
        subtitle: "Uncover new growth areas for your business.",
        image: "https://i.pinimg.com/originals/de/d0/bb/ded0bbdd8485e424327257405a86a884.gif",
        buttonText: "Explore",
        isImageLeft: false,
      },
    ],
  },
  kpiConfig: {
    heading: {
      title: "Key Performance Indicators",
      description: "Track important metrics to measure success.",
    },
    kpis: [
      { counter: 800, title: "Customer Satisfaction" },
      { counter: 1200, title: "User Engagement" },
      { counter: 500, title: "Revenue Growth" },
    ],
  },
  videoConfig: {
    heading: {
      title: "Our Video Content",
      description: "Watch our videos to learn more about our services and solutions.",
    },
    videoSrc: "https://path/to/video.mp4",
  },
  trustConfig: {
    title: "Trusted by Top Companies",
    images: ["https://www.shutterstock.com/image-illustration/ccpa-california-consumer-privacy-act-600nw-2120684813.jpg",
       "https://www.loginradius.com/wp-content/uploads/2019/10/PNG_GDPR-e1672263252689.png",
        "https://img.freepik.com/premium-vector/iso-certified-badge-with-globe_1135235-1978.jpg?semt=ais_hybrid",
        "https://practicesuite.com/wp-content/uploads/2023/02/HIPPA1.jpg",
        "https://accorian.com/wp-content/uploads/2022/08/aicpa-soc-logo-freelogovectors.net_-PNG.png"],
  },
  articlesConfig: [
    {
      title: "Article 1",
      content: "This is the content for Article 1.",
      image: "https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/73/52/7352020b-b331-47f5-8405-3d114bf0f28a/types-of-meetings.png",
      buttonText: "Read More"
    },
    {
      title: "Article 2",
      content: "This is the content for Article 2.",
      image: "https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/73/52/7352020b-b331-47f5-8405-3d114bf0f28a/types-of-meetings.png",
      buttonText: "Learn More"
    },
    {
      title: "Article 3",
      content: "This is the content for Article 3.",
      image: "https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/73/52/7352020b-b331-47f5-8405-3d114bf0f28a/types-of-meetings.png0",
      buttonText: "Discover"
    }
  ],
  footerConfig: {
    logo: "/logo.png",
    content: "© 2024 Our Company. All rights reserved.",
    buttons: [
      { text: "Privacy Policy", link: "/privacy" },
      { text: "Terms of Service", link: "/terms" },
    ],
    socialImages: [
      "https://cdn.pixabay.com/photo/2015/09/01/14/36/facebook-917108_960_720.png",
      "https://cdn.pixabay.com/photo/2015/09/01/14/36/twitter-917116_960_720.png",
      // More URLs...
    ],
  },
};

export default config;
