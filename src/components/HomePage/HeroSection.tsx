import React from "react";
import Image from "next/image";
import Hero from "@/resources/hero-bg.png";

function HeroSection() {
  return (
    <div className="">
      {/* Hero section */}
      <div className="h-[556px] relative">
        <Image
          src={Hero}
          alt="Hero Background"
          layout="fill"
          className="z-[-1]"
        />
      </div>
      <div className="w-full h-[250px] flex justify-center">
        <div className="translate-y-[-50%] w-[972px] h-[422px] bg-white shadow-2xl rounded-[15px] flex flex-col items-center">
          <h2 className="font-[700] text-[40px] text-[#21215F] mt-[45px]">
            Welcome to Randiv Work Force
          </h2>
          <p className="w-[734px] h-[192px] text-[22px] font-[400] mt-[50px]">
            At Randiv Work Force, we specialize in bridging the gap between
            skilled professionals and global employment opportunities. Whether
            you area dedicated nurse orCare Giver lookingto make a difference in
            UK Care Homes/Hospitals or an ambitious professional eager to
            explore opportunities in Japan, New Zealand, or across Europe, we
            are here to make your dreams a reality
          </p>
        </div>
      </div>
      {/* content */}
    </div>
  );
}

export default HeroSection;
