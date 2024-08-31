import ContactForm from "@/components/ContactUsPage/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function ContactUs() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center">
        {/* Heading and form */}
        <div className="w-[1000px] h-[1300px] mt-[100px]">
          {/* heading */}
          <div className="w-[483px] h-[78px] mb-[80px] bg-[#50B2E3] text-[40px] font-[700] flex items-center justify-center text-white rounded-[12px]">
            <p> Contact Us </p>
          </div>
          {/* Form */}
          <div className="w-[708px]  h-[800px] shadow-2xl">
            <h2 className="text-[32px] text-center font-[700] text-[#21215F] p-[30px]">
              Inquaries
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* contact */}

        <div className="flex flex-col gap-10 mt-[280px]">
          <p className="text-[26px] font-[700]">Address</p>
          <p className="text-[22px] font-[400]">
            Randiv WorkforceForeign Employment
            <br /> Solution(pvt) ltd no 104, <br />
            3rd floor, <br />
            Sanasa Ward City, <br />
            Queen Marry Road, Gampaha, <br />
            Sri Lanka.
          </p>
          <p className="text-[26px] font-[700]">Contact Numbers</p>
          <ul className="text-[22px] font-[400] list-disc ml-5">
            <li>077 374 1720</li>
            <li>0332 320 490</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
