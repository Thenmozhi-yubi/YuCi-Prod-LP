import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AdminPage from "./Admin/AdminPage";
import NavUpdate from "./Admin/NavUpdate";
import HeroUpdate from "./Admin/HeroUpdate";
import FeatureUpdate from "./Admin/FeatureUpdate";
import KpiUpdate from "./Admin/KpiUpdate";
import VideoSectionUpdate from "./Admin/VideoSectionUpdate";
import TrustUpdate from "./Admin/TrustUpdate";
import ArticlesUpdate from "./Admin/ArticlesUpdate";
import FooterUpdate from "./Admin/FooterUpdate";
import CtaUpdate from "./Admin/CtaUpdate";

function App() {
  const [navConfig, setNavConfig] = useState(configData.navConfig);
  const [heroConfig, setHeroConfig] = useState(
    JSON.parse(localStorage.getItem("heroConfig")) || configData.heroConfig
  );
  const [featureConfig, setFeatureConfig] = useState(configData.featureConfig);
  const [kpiConfig, setKpiConfig] = useState(
    JSON.parse(localStorage.getItem("kpiConfig")) || configData.kpiConfig
  );
  const [videoConfig, setVideoConfig] = useState(
    JSON.parse(localStorage.getItem("videoConfig")) || configData.videoConfig
  );
  const [trustConfig, setTrustConfig] = useState(
    JSON.parse(localStorage.getItem("trustConfig")) || configData.trustConfig
  );
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || []
  );
  const [footerConfig, setFooterConfig] = useState(
    JSON.parse(localStorage.getItem("footerConfig")) || configData.footerConfig
  );

  const [ctaConfig, setCtaConfig] = useState(
    JSON.parse(localStorage.getItem("ctaConfig")) || configData.ctaConfig
  )

  useEffect(() => {
    localStorage.setItem("heroConfig", JSON.stringify(heroConfig));
  }, [heroConfig]);

  useEffect(() => {
    localStorage.setItem("kpiConfig", JSON.stringify(kpiConfig));
  }, [kpiConfig]);

  useEffect(() => {
    localStorage.setItem("videoConfig", JSON.stringify(videoConfig));
  }, [videoConfig]);

  useEffect(() => {
    localStorage.setItem("trustConfig", JSON.stringify(trustConfig));
  }, [trustConfig]);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem("footerConfig", JSON.stringify(footerConfig));
  }, [footerConfig]);
 
  useEffect(() => {
    localStorage.setItem("ctaConfig", JSON.stringify(ctaConfig));
  }, [ctaConfig]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              navConfig={navConfig}
              heroConfig={heroConfig}
              featureConfig={featureConfig}
              kpiConfig={kpiConfig}
              videoConfig={videoConfig}
              trustConfig={trustConfig}
              articles={articles}
              footerConfig={footerConfig}
              ctaConfig={ctaConfig}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPage 
              navConfig={config.navConfig} 
              setNavConfig={(newConfig) => updateConfig({ ...config, navConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/topnav"
          element={
            <NavUpdate 
              config={config.navConfig} 
              setConfig={(newConfig) => updateConfig({ ...config, navConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/hero"
          element={
            <HeroUpdate 
              heroConfig={config.heroConfig} 
              setHeroConfig={(newConfig) => updateConfig({ ...config, heroConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/feature"
          element={
            <FeatureUpdate
              featureConfig={config.featureConfig}
              setFeatureConfig={(newConfig) => updateConfig({ ...config, featureConfig: newConfig })}
            />
          }
        />
        <Route
          path="/admin/kpi"
          element={
            <KpiUpdate 
              kpiSection={config.kpiConfig} 
              setKpiSection={(newConfig) => updateConfig({ ...config, kpiConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/video"
          element={
            <VideoSectionUpdate
              videoConfig={config.videoConfig}
              setVideoConfig={(newConfig) => updateConfig({ ...config, videoConfig: newConfig })}
            />
          }
        />
        <Route
          path="/admin/trust"
          element={
            <TrustUpdate 
              trustConfig={config.trustConfig} 
              setTrustConfig={(newConfig) => updateConfig({ ...config, trustConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/article"
          element={
            <ArticlesUpdate 
              articles={config.articles || []} 
              setArticles={(newArticles) => updateConfig({ ...config, articles: newArticles })} 
            />
          }
        />
        <Route
          path="/admin/footer"
          element={
            <FooterUpdate 
              footerConfig={config.footerConfig} 
              setFooterConfig={(newConfig) => updateConfig({ ...config, footerConfig: newConfig })} 
            />
          }
        />
        <Route
          path="/admin/cta"
          element={
            <CtaUpdate 
              ctaConfig={config.ctaConfig} 
              setCtaConfig={(newConfig) => updateConfig({ ...config, ctaConfig: newConfig })} 
            />
          }
        />
         <Route
          path="/admin/offer"
          element={<TailorUpdate tailorConfig={tailorConfig} setTailorConfig={setTailorConfig} />}
        />
      </Routes>
    </Router>
  );
}

export default App;