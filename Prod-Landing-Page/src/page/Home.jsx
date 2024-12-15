import React from "react";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Kpi from "../components/Kpi";
import VideoSection from "../components/VideoSection";
import Trust from "../components/Trust";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const Home = ({
  heroConfig,
  navConfig,
  featureConfig,
  kpiConfig,
  videoConfig,
  trustConfig,
  articles,
  footerConfig,
}) => {
  return (
    <div>
      <TopNav config={navConfig} />
      <Hero
        title={heroConfig.title}
        subtitle={heroConfig.subtitle}
        bgImage={heroConfig.bgImage}
        buttonText={heroConfig.buttonText}
      />
      <Feature featureConfig={featureConfig} />
      <Kpi kpiConfig={kpiConfig} />
      <VideoSection videoConfig={videoConfig} />
      <Trust trustConfig={trustConfig} />
      <Articles articles={articles} />
      <Footer footerConfig={footerConfig}/>
    </div>
  );
};

export default Home;
