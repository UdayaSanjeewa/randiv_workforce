import Image from "next/image";
import React from "react";
import logo from "@/resources/logo.jpg";
import Link from "next/link";

function Footer() {
  return (
    // Main container
    <div className="w-full bg-[#21215F] h-[650px] flex flex-col md:flex-row md:items-center  py-8  md:py-0 md:h-[303px]">
      {/* Logo */}
      <div className="mb-8 md:mb-0 w-[204px] h-[129px] rounded-r-[80px] bg-white flex items-center justify-center">
        <div className="w-[120px]">
          <Image src={logo} alt="Logo" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8 md:mb-0 flex flex-col ml-[30px] items-start text-white gap-2 md:ml-[60px] text-center md:text-left w-[200px] h-[158px] xl:ml-[200px] md:mt-[30px]">
        <h2 className="text-[22px] font-[700]">Quick Links</h2>
        <Link href="/AboutUs" className="opacity-[70%] text-[18px] font-[400]">
          About Us
        </Link>
        <Link
          href="/Portfolio"
          className="opacity-[70%] text-[18px] font-[400]"
        >
          Portfolio
        </Link>
        <Link
          href="/privacy-policy"
          className="opacity-[70%] text-[18px] font-[400]"
        >
          Privacy Policy
        </Link>
      </div>

      {/* Contact */}
      <div className="text-white flex flex-col gap-2 ml-[30px] md:ml-[60px] md:items-start md:text-left w-full md:w-[400px] h-[167px] xl:ml-[200px] md:mt-[34px]">
        <h2 className="text-[22px] font-[700] mb-4 md:mb-0">Contact</h2>
        <div className="flex  md:justify-start opacity-[70%] mb-2">
          <p>Email</p>
          <p className="pl-[25px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px]">
            info@randivworkforce.com
          </p>
        </div>
        <div className="flex  md:justify-start opacity-[70%] mb-2">
          <p>Phone</p>
          <p className="pl-[18px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px]">
            077 374 1720 / 0332 320 490
          </p>
        </div>
        <div className="flex md:justify-start opacity-[70%]">
          <p>Address</p>
          <p className="pl-[7px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px] w-[200px] xl:w-[350px]">
            Randiv Workforce Foreign Employment Solution(pvt) ltd no 104, 3rd
            floor, Sanasa Ward City, Queen Marry Road, Gampaha, Sri Lanka.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
