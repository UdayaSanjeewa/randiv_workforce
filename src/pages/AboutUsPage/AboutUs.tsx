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
      <div className="w-full flex justify-center p-4">
        <div className="w-full max-w-[1200px]">
          <h2 className="font-[700] text-[32px] md:text-[40px] lg:text-[48px] text-[#50B2E3] mt-[30px]">
            About Us
          </h2>

          <div className="flex flex-col lg:flex-row justify-between mt-[35px]">
            {/* Content */}
            <p className="w-full lg:w-[833px] text-[18px] md:text-[20px] lg:text-[22px] font-[400]">
              With years of experience in the foreign employment sector, we offer
              tailored solutions that not only secure your work permit but also
              provide financial assistance to ensure that nothing stands in your
              way. Our commitment extends beyond job placement; we support you
              every step of the way, from application to successful integration
              into your new role abroad. <br />
              Discover a world of possibilities with Randiv Work Force, where
              your career growth is our top priority.
            </p>

            {/* Image */}
            <div className="hidden lg:block mt-6 lg:mt-0">
              <Image
                src={IMG}
                alt="About Us Image"
                className="w-[200px] h-[200px] md:w-[251px] md:h-[251px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="w-full flex justify-center p-4">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between space-y-8 mb-32 lg:space-y-0  lg:space-x-8">
          {/* Vision */}
          <div className="w-full lg:w-[580px] h-auto rounded-[15px] shadow-2xl p-6">
            <h2 className="text-[#21215F] text-[28px] md:text-[32px] lg:text-[36px] font-[700]">
              Vision
            </h2>
            <div className="mt-[20px]">
              <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400]">
                Randiv Work Force envisions becoming a global leader in foreign
                employment solutions, connecting talented professionals with
                career opportunities worldwide. We are dedicated to making
                international transitions smooth and successful, empowering
                individuals to grow and excel in their new roles. Through
                innovation and integrity, we strive to set new standards and
                positively impact the global workforce.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="w-full lg:w-[580px] h-auto rounded-[15px] shadow-2xl p-6">
            <h2 className="text-[#21215F] text-[28px] md:text-[32px] lg:text-[36px] font-[700]">
              Mission
            </h2>
            <div className="mt-[20px]">
              <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400]">
                At Randiv Work Force, our mission is to provide comprehensive
                foreign employment solutions that simplify the process of securing
                work permits and transitioning to new roles abroad. We are committed
                to delivering exceptional support, personalized guidance, and
                financial assistance to help skilled professionals achieve their
                career goals in international markets. Our goal is to ensure a
                seamless and successful journey for every candidate, contributing to
                their growth and the success of the organizations they join.
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
