import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import IMG from "@/resources/aboutIMG.jpg";

function AboutUs() {
  return (
    <div>
      <NavBar />

      {/* Top part */}
      <div className="w-full flex justify-center">
        <div className="w-[1200px] h-[500px]">
          <h2 className="font-[700] text-[48px] text-[#50B2E3] mt-[30px]">
            About Us
          </h2>

          <div className="flex justify-between">
            {/* content */}
            <p className="w-[833px] h-[224px] mt-[35px] text-[22px] font-[400]">
              With years of experience in the foreignemployment sector, we offer
              tailoredsolutions that not only secure your work permit but also
              provide financial assistance to ensure that nothing stands in your
              way. Our commitment extends beyond job placement; we support you
              every step of the way, from application to successful integration
              into your new role abroad. <br />
              Discover a world of possibilities with Randiv Work Force, where
              your career growth is our top priority.
            </p>

            {/* image */}
            <Image src={IMG} alt="" className="w-[251px] h-[251px]"></Image>
          </div>
        </div>
      </div>

      {/* Bottom Part */}

      <div className="w-full flex flex-row justify-center">
      <div className="w-[1200px] flex justify-between h-[700px]">
        {/* Vission */}
        <div className="w-[580px] h-[481px] rounded-[15px] shadow-2xl">
          <h2 className="text-[#21215F] text-[36px] font-[700] pl-[25px] pt-[20px]">Vision</h2>
          <div className="w-[full] flex justify-center mt-[20px]">

          <p className="w-[537px] text-[22px] font-[400]">
            Randiv Work Force envisions becoming a global leader in foreign
            employment solutions, connecting talented professionals with career
            opportunities worldwide. We are dedicated to making international
            transitions smooth and successful, empowering individuals to grow
            and excel in their new roles.Through innovation and integrity, we
            strive to set new standards and positively impact the global
            workforce.
          </p>

          </div>

        </div>
        {/* Mission */}
        <div className="w-[580px] h-[481px] rounded-[15px] shadow-2xl">
          <h2 className="text-[#21215F] text-[36px] font-[700] pl-[25px] pt-[20px]">Mission</h2>

          <div className="w-[full] flex justify-center  mt-[20px]">

          <p className="w-[537px] text-[22px] font-[400]">
            At Randiv Work Force, our mission is to provide comprehensive
            foreign employment solutions that simplify the process of securing
            work permits and transitioning to new roles abroad. We are committed
            to delivering exceptional support, personalized guidance, and
            financial assistance to help skilled professionals achieve their
            career goals in international markets. Our goal is to ensure a
            seamless and successful journeyfor every candidate, contributing to
            theirgrowth and the success of the organizations they join
          </p>

          </div>

        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
