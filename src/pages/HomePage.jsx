import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { AboutPage } from "./AboutPage";
import ContactPage from "./ContactPage";
import SkillsPage from "./SkillsPage";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ContactPage />
       
    </div>
  );
};

export default HomePage;
