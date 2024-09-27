import ContactForm from "@/components/ContactUsPage/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import * as motion from "framer-motion/client";
import fadeIn from "../../variants"
import ContactIMG from "../../resources/contactUS.png"
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function ContactUs() {
  return (
    <>
      <NavBar />

      <motion.div
        variants={fadeIn("up", 0.3)}  // Using the defined fadeIn variant
        initial="hidden"              // Initial state is hidden
        whileInView="show"            // Animation will trigger when in view
        viewport={{ once: true, amount: 0.4 }}  // Options for when the animation triggers
      >

      <div className="flex flex-col lg:flex-row justify-center items-center  lg:items-start gap-10 px-4 lg:px-20 xl:px-32 mt-10 lg:mt-[100px]">
        {/* Heading and form */}
        <div className="w-full max-w-[1000px] h-auto lg:h-[1300px]">
          {/* heading */}
          <div className="w-full max-w-[483px] h-auto lg:h-[78px] mb-10 lg:mb-[80px] bg-[#50B2E3] text-[28px] md:text-[32px] lg:text-[40px] font-[700] flex items-center justify-center text-white rounded-[12px] py-4 lg:py-0 mx-auto lg:mx-0">
            <p>Contact Us</p>
          </div>

          {/* Form */}
          <div className="w-full max-w-[708px] h-auto lg:h-[800px] shadow-2xl mx-auto lg:mx-0">
            <h2 className="text-[28px] md:text-[32px] text-center font-[700] text-[#21215F] p-[30px]">
              Inquiries
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Contact Information */}

        <div className="flex flex-col gap-6 w-full max-w-[500px] ">
          <div>
          <Image
            src={ContactIMG}
            alt="Contact Us"
            className="w-[300px] md:w-[400px] lg:w-[540px] h-auto rounded-lg pb-10 lg:block hidden"
          />
            <p className="text-[22px] md:text-[26px] font-[700] flex items-center gap-3 text-[#21215F]"> <IoLocationSharp /> Address</p>
            <p className="text-[18px] md:text-[22px] font-[400] mt-2 ml-[60px]">
              Randiv WorkforceForeign Employment <br />
              Solution(pvt) ltd<br />
              no 104, <br />
              3rd floor, <br />
              Sanasa Ward City, <br />
              Queen Marry Road, <br />
              Gampaha Sri Lanka.
            </p>
          </div>

          <div className="mb-20">
            <p className="text-[22px] md:text-[26px] font-[700] flex items-start gap-3 text-[#21215F]"><FaPhone className="mt-2" /> Contact Numbers</p>
            <ul className="text-[18px] md:text-[22px] font-[400] list-disc ml-[60px] mt-2">
              <li>077 374 1720</li>
              <li>0332 320 490</li>
            </ul>
          </div>
        </div>
      </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default ContactUs;
