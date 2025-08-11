import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
export const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};
