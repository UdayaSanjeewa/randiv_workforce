import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import PortIMG from "@/resources/portfolioIMG.jpg";
import * as motion from "framer-motion/client";
import fadeIn from "../../variants"

function Portfolio() {
  return (
    <>
      <NavBar />
      
      <motion.div
        variants={fadeIn("up", 0.3)}  // Using the defined fadeIn variant
        initial="hidden"              // Initial state is hidden
        whileInView="show"            // Animation will trigger when in view
        viewport={{ once: true, amount: 0.4 }}  // Options for when the animation triggers
      >
      {/* Top */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[90px] h-auto lg:h-[500px] mt-[60px] px-4">
        <div>
          <h2 className="font-[700] text-[36px] md:text-[45px] lg:text-[55px] text-[#21215F] mt-[30px] text-center lg:text-left">
            Partnerships <br />& Collaborations
          </h2>

          {/* content */}
          <p className="mt-[35px] text-[18px] md:text-[20px] lg:text-[22px] font-[400] text-center lg:text-left max-w-[575px]">
            We are proud to collaborate with industry leaders across the globe.
            Our partnerships ensure that our candidates are placed in reputable
            organizations where they can grow and succeed.
          </p>
        </div>
        <div>
          {/* image */}
          <Image
            src={PortIMG}
            alt="Partnerships and Collaborations"
            className="w-[300px] md:w-[400px] lg:w-[540px] h-auto rounded-lg lg:block hidden"
          />
        </div>
      </div>

      {/* Mid */}
      
      <div className="flex justify-center h-auto lg:h-[650px] px-4 mt-10 lg:mt-0">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Tag 01 */}
          <div className="w-full max-w-[510px] bg-[#50B2E3] flex items-center pl-[20px] md:pl-[40px] text-white rounded-[12px] py-3">
            <h2 className="font-[700] text-[20px] md:text-[24px]">UK Care Homes</h2>
          </div>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] w-full max-w-[619px]">
            Partnered with multiple care homes across the UK, providing
            opportunities for Nurses and Carers.
          </p>

          {/* Tag 02 */}
          <div className="w-full max-w-[510px] bg-[#50B2E3] flex items-center pl-[20px] md:pl-[40px] text-white rounded-[12px] py-3">
            <h2 className="font-[700] text-[20px] md:text-[24px]">Japan</h2>
          </div>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] w-full max-w-[619px]">
            Collaborating with top Hard Worker providers to place skilled
            professionals in key roles.
          </p>

          {/* Tag 03 */}
          <div className="w-full max-w-[510px] bg-[#50B2E3] flex items-center pl-[20px] md:pl-[40px] text-white rounded-[12px] py-3">
            <h2 className="font-[700] text-[20px] md:text-[24px]">
              Engineering Firms in New Zealand
            </h2>
          </div>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] w-full max-w-[619px]">
            Working with leading companies to offer opportunities for engineers
            and technical professionals.
          </p>
        </div>
      </div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        variants={fadeIn("up", 0.3)}  // Using the defined fadeIn variant
        initial="hidden"              // Initial state is hidden
        whileInView="show"            // Animation will trigger when in view
        viewport={{ once: true, amount: 0.4 }}  // Options for when the animation triggers
      >
      <div className="flex justify-center py-10 lg:py-20 px-4 lg:px-28">
        <div className="w-full max-w-[1300px]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-center font-[700] text-[#21215F]">
            Our Impact in Numbers
          </h2>

          <div className="flex flex-col lg:flex-row w-full max-w-[1200px] justify-between mt-10 lg:mt-[80px] mb-10 lg:mb-[80px] gap-10">
            {/* Impact 01 */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[50px]">
              <div className="w-[100px] md:w-[129px] h-[100px] bg-[#21215F] text-white lg:min-w-[120px] text-[36px] md:text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="text-[18px] md:text-[24px] font-[400] text-center lg:text-left max-w-[364px]">
                <p>Successful work permits secured across multiple countries.</p>
              </div>
            </div>

            {/* Impact 02 */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[50px]">
              <div className="w-[100px] md:w-[129px] h-[100px] bg-[#21215F] text-white lg:min-w-[120px] text-[36px] md:text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="text-[18px] md:text-[24px] font-[400] text-center lg:text-left max-w-[364px]">
                <p>Clients placed in UK Care Homes.</p>
              </div>
            </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-[1200px] justify-between mt-10 lg:mt-[80px] mb-10 lg:mb-[80px] gap-10">
            {/* Impact 03 */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[50px]">
              <div className="w-[100px] md:w-[129px] h-[100px] bg-[#21215F] text-white lg:min-w-[120px] text-[36px] md:text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="text-[18px] md:text-[24px] font-[400] text-center lg:text-left max-w-[364px]">
                <p>Satisfied clients in Japan, New Zealand, and Europe.</p>
              </div>
            </div>

            {/* Impact 04 */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[50px]">
              <div className="w-[100px] md:w-[129px] h-[100px] bg-[#21215F] text-white lg:min-w-[120px] text-[36px] md:text-[44px] rounded-[20px] flex items-center justify-center">
                <p>100%</p>
              </div>
              <div className="text-[18px] md:text-[24px] font-[400] text-center lg:text-left max-w-[364px]">
                <p>Client satisfaction in terms of service quality and support.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </motion.div>


      <Footer />
    </>
  );
}

export default Portfolio;
