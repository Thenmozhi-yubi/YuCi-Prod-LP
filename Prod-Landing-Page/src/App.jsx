// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AdminPage from "./Admin/AdminPage";
import NavUpdate from "./Admin/NavUpdate";
import HeroUpdate from "./Admin/HeroUpdate";
import FeatureUpdate from "./Admin/FeatureUpdate";
import configData from "./config";

function App() {
  const [navConfig, setNavConfig] = useState(configData.navConfig);
  const [heroConfig, setHeroConfig] = useState(
    JSON.parse(localStorage.getItem("heroConfig")) || configData.heroConfig
  );
  const [featureConfig, setFeatureConfig] = useState(configData.featureConfig);

  useEffect(() => {
    // Whenever heroConfig changes, update localStorage
    localStorage.setItem("heroConfig", JSON.stringify(heroConfig));
  }, [heroConfig]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home navConfig={navConfig} heroConfig={heroConfig} featureConfig={featureConfig} />}
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
          element={<FeatureUpdate featureConfig={featureConfig} setFeatureConfig={setFeatureConfig} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
