import React from "react";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Kpi from "../components/Kpi";
import VideoSection from "../components/VideoSection";
import Trust from "../components/Trust";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Offer1 from "../Tailor Layout/Tailor1";
import Tailor1 from "../Tailor Layout/Tailor1";

const Home = ({
  heroConfig,
  navConfig,
  featureConfig,
  kpiConfig,
  videoConfig,
  trustConfig,
  articles,
  footerConfig,
  ctaConfig,
  tailorConfig,
}) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
      <TopNav config={navConfig} />
      </div>
      
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
      <Tailor1 tailorConfig={tailorConfig}/>
      <div className="flex flex-col">
        <div className="-mb-40"><Cta ctaConfig={ctaConfig}/></div>
        <div><Footer footerConfig={footerConfig} /></div>
      
      
      </div>
      
      
    </div>
  );
};

export default Home;
