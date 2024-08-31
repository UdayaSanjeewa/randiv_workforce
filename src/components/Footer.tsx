import Image from "next/image";
import React from "react";
import logo from "@/resources/logo.jpg";
import Link from "next/link";

function Footer() {
  return (
    // Main container
    <div className="w-full h-[303px] bg-[#21215F] flex items-center justify-between pr-[400px] bottom-0">
      {/* logo */}
      <div className="w-[204px] h-[129px] rounded-r-[80px] bg-white flex items-center justify-center">
        {/* image */}
        <div className="w-[120px]">
          <Image src={logo} alt=""></Image>
        </div>
      </div>
      {/* QuickLinks */}
      <div className="flex flex-col w-[163px] h-[158px] text-white justify-between">
        <h2 className="text-[22px] font-[700]">Quick Links</h2>
        <Link href="/AboutUs" className="opacity-[70%] text-[18px] font-[400]">
          About us
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
      <div className="w-[592px] h-[167px] text-white flex flex-col justify-between">
        <h2 className="text-[22px] font-[700]">Contact</h2>
        {/* email */}
        <div className="flex opacity-[70%]">
          <p>Email</p>
          <p className="pl-[25px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px]">info@randivworkforce.com</p>
        </div>
        {/* phone */}
        <div className="flex opacity-[70%]">
          <p>Phone</p>
          <p className="pl-[18px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px]">
            077 374 1720 / 0332 320 490
          </p>
        </div>
        {/* Address */}
        <div className="flex opacity-[70%]">
          <p>Address</p>
          <p className="pl-[7px] pr-4">:</p>
          <p className="opacity-[40%] text-[12px]">
            Randiv WorkforceForeign Employment Solution(pvt) ltd no 104, 3rd
            floor, Sanasa Ward City, Queen Marry Road, Gampaha, Sri Lanka.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
