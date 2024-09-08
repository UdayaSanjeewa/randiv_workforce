import React from "react";
import Image from "next/image";
import Hero from "@/resources/Hero.jpg";
import * as motion from "framer-motion/client";

function HeroSection() {
  return (
    <div className="">
      {/* Hero section */}
      <div className="h-[250px] md:h-[450px] xl:h-[600px] relative">
        <Image
          src={Hero}
          alt="Hero Background"
          layout="fill"
          className="z-[-1]"
        />
      </div>
      <div className="w-full h-[200px] md:h-[150px] xl:h-[250px] mt-[150px] md:mt-16 xl:mt-0 flex justify-center">
        <div className="translate-y-[-50%] w-[300px] h-[490px] md:w-[600px] xl:w-[972px] md:h-[422px] bg-white shadow-2xl rounded-[15px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="font-[700] text-[35px] text-center   xl:text-[40px] text-[#21215F] md:mt-[45px]">
              Welcome to Randiv Work Force
            </h2>
            <p className="xl:w-[734px] pl-5 pr-5 xl:pl-0 xl:pr-0 mt-[20px]  xl:h-[192px] md:text-[22px] font-[400] xl:mt-[50px]">
            At Randiv Workforce, we specialize in bridging the gap between skilled professionals and global employment opportunities. Whether you are a dedicated nurse or caregiver looking to make a difference in UK care homes and hospitals, or an ambitious professional eager to explore opportunities in Japan, New Zealand, or across Europe, we are here to help make your dreams a reality.
            </p>
          </motion.div>
        </div>
      </div>
      {/* content */}
    </div>
  );
}

export default HeroSection;
