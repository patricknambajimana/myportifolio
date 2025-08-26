// HomePage.jsx
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Outlet /> {/* Children (Hero, About, Contact, etc.) render here */}
    </div>
  );
};

export default HomePage;
