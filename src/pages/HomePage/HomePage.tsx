import Footer from "@/components/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import NavBar from "@/components/NavBar";
import Services from "@/components/HomePage/Services";
import React from "react";
import ApplyForm from "@/components/HomePage/ApplyForm";
import * as motion from "framer-motion/client"


function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection/>
      <Services/>
      <ApplyForm/>
      
      <div className="h-[250px]">
          {/* Dont remove */}
      </div>
      <Footer />

    </>
  );
}

export default HomePage;
