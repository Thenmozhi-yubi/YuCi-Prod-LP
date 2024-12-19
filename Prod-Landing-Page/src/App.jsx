import React, {useState} from "react";
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
import { useConfig } from './config';
import TestimonialUpdate from "./Admin/TestimonialUpdate";

function App() {
  const siteId = '690718';
  const { config, loading, updateConfig } = useConfig(siteId);

  if (loading) {
    return <div>Loading...</div>; // Add proper loading state handling
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              navConfig={config.navConfig}
              heroConfig={config.heroConfig
                
              }
              featureConfig={config.featureConfig}
              kpiConfig={config.kpiConfig}
              videoConfig={config.videoConfig}
              trustConfig={config.trustConfig}
              articles={config.articlesConfig.articles || []}
              footerConfig={config.footerConfig}
              ctaConfig={config.ctaConfig}
              tailorConfig={config.tailorConfig}
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
          path="/admin/testimonial"
          element={
            <TestimonialUpdate 
              ctaConfig={config.ctaConfig} 
              setCtaConfig={(newConfig) => updateConfig({ ...config, testimonialConfig: newConfig })} 
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;