import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";
import Hero from "../components/Hero";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Route>
    </Routes>
  );
};
