import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import PortIMG from "@/resources/portfolioIMG.jpg";

function Portfolio() {
  return (
    <>
      <NavBar />

      {/* Top */}
      <div className="w-full flex flex-row justify-center gap-[90px] h-[500px] mt-[60px]">
        <div>
          <h2 className="font-[700] text-[55px] text-[#21215F] mt-[30px]">
            Partnerships <br />& Collaborations
          </h2>

          {/* content */}
          <p className="w-[575px] h-[128px] mt-[35px] text-[22px] font-[400]">
            We are proud to collaborate with industry leaders across the globe.
            Our partnerships ensure that our candidates are placed in reputable
            organizations where they can grow and succeed.
          </p>
        </div>
        <div>
          {/* image */}
          <Image src={PortIMG} alt="" className="w-[540px] h-[360px]"></Image>
        </div>
      </div>

      {/* Mid */}

      <div className="flex justify-center h-[650px]">
        {/* tag 01 */}
        <div className="w-[1200px] flex flex-col gap-6">
          <div className="w-[510px] h-[58px] bg-[#50B2E3] flex items-center pl-[40px] text-white rounded-[12px]">
            <h2 className="font-[700] text-[24px]">UK Care Homes</h2>
          </div>
          <p className="text-[22px] font-[400] w-[619px] h-[64px]">
            Partnered with multiple care homes across the UK, providing
            opportunities for Nurses and Carers.
          </p>

          {/* Tag 2 */}
          <div className="w-[510px] h-[58px] bg-[#50B2E3] flex items-center pl-[40px] text-white rounded-[12px]">
            <h2 className="font-[700] text-[24px]">Japan</h2>
          </div>
          <p className="text-[22px] font-[400] w-[619px] h-[64px]">
            Collaborating with top Hard Worker providers to place skilled
            professionals in key roles.
          </p>

          {/* Tag 3 */}
          <div className="w-[510px] h-[58px] bg-[#50B2E3] flex items-center pl-[40px] text-white rounded-[12px]">
            <h2 className="font-[700] text-[24px]">
              Engineering Firms in New Zealand
            </h2>
          </div>
          <p className="text-[22px] font-[400] w-[619px] h-[64px]">
            Working with leading companies to offer opportunities for engineers
            and technical professionals.
          </p>
        </div>
      </div>

      {/* Bottom */}

      <div className="flex justify-center">
        <div className="w-[1300px] h-[700px]">
          <h2 className="text-[40px] text-center font-[700] text-[#21215F]">
            Our Impact in Numbers
          </h2>

          {/* Imapct 01 */}
          <div className="flex w-[1200px] justify-between mt-[80px] mb-[80px]">
            <div className="flex items-center justify-center gap-[50px]">
              <div className="w-[129px] h-[100px] bg-[#21215F] text-white text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="w-[364px] h-[70px] text-[24px] font-[400]">
                <p>
                  Successful work permits secured across multiple countries.
                </p>
              </div>
            </div>

            {/* Imapct 02 */}

            <div className="flex items-center justify-center gap-[50px]">
              <div className="w-[129px] h-[100px] bg-[#21215F] text-white text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="w-[364px] h-[70px] text-[24px] font-[400]">
                <p>Clients placed in UK Care Homes.</p>
              </div>
            </div>
          </div>

          {/* Imapct 03 */}
          <div className="flex w-[1200px] justify-between mt-[80px] mb-[80px]">
            <div className="flex items-center justify-center gap-[50px]">
              <div className="w-[129px] h-[100px] bg-[#21215F] text-white text-[44px] rounded-[20px] flex items-center justify-center">
                <p>50+</p>
              </div>
              <div className="w-[364px] h-[70px] text-[24px] font-[400]">
                <p>Satisfied clients in Japan, New Zealand, and Europe.</p>
              </div>
            </div>

            {/* Imapct 04 */}
            <div className="flex items-center justify-center gap-[50px]">
              <div className="w-[129px] h-[100px] bg-[#21215F] text-white text-[44px] rounded-[20px] flex items-center justify-center">
                <p>100%</p>
              </div>
              <div className="w-[364px] h-[70px] text-[24px] font-[400]">
                <p>
                  Client satisfaction in terms of service quality and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Portfolio;
