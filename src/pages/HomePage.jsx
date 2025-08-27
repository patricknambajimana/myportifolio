import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Outlet />
    </div>
  );
};

export default HomePage;
