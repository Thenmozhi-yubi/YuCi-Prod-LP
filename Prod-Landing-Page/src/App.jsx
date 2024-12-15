import React, { useState, useEffect } from "react";
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
import configData from "./config";
import Footer from "./components/Footer";

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
            />
          }
        />
        <Route
          path="/admin"
          element={<AdminPage navConfig={navConfig} setNavConfig={setNavConfig} />}
        />
        <Route
          path="/admin/topnav"
          element={<NavUpdate config={navConfig} setConfig={setNavConfig} />}
        />
        <Route
          path="/admin/hero"
          element={<HeroUpdate heroConfig={heroConfig} setHeroConfig={setHeroConfig} />}
        />
        <Route
          path="/admin/feature"
          element={
            <FeatureUpdate
              featureConfig={featureConfig}
              setFeatureConfig={setFeatureConfig}
            />
          }
        />
        <Route
          path="/admin/kpi"
          element={<KpiUpdate kpiSection={kpiConfig} setKpiSection={setKpiConfig} />}
        />
        <Route
          path="/admin/video"
          element={
            <VideoSectionUpdate
              videoConfig={videoConfig}
              setVideoConfig={setVideoConfig}
            />
          }
        />
        <Route
          path="/admin/trust"
          element={
            <TrustUpdate trustConfig={trustConfig} setTrustConfig={setTrustConfig} />
          }
        />
        <Route
          path="/admin/article"
          element={<ArticlesUpdate articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/admin/footer"
          element={<FooterUpdate footerConfig={footerConfig} setFooterConfig={setFooterConfig} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
