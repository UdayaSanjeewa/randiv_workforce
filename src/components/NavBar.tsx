import Image from "next/image";
import React from "react";
import logo from "@/resources/rv-logo.jpeg";
import Link from "next/link";

function NavBar() {
  return (
    // Main Container
    <div className="w-full h-[95px] flex justify-around items-center shadow-xl sticky top-0 z-10 bg-white">
      {/* Logo */}
      <div className="w-[125px]">
        <Image src={logo} alt=""></Image>
      </div>

      {/* Nav Links */}
      <div className="flex w-[476px] justify-between text-[20px] font-[700]">
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About Us</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/ContactUs">Contact Us</Link>
      </div>
    </div>
  );
}

export default NavBar;
