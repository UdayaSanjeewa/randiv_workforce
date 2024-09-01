import Image from "next/image";
import React from "react";
import serveOne from "@/resources/serveOne.jpg";
import serveTwo from "@/resources/serveTwo.jpg";
import serveThree from "@/resources/serveThree.jpg";
import serveFour from "@/resources/serveFour.jpg";
import Link from "next/link";

function services() {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[1300px] h-[1500px] md:h-[500px]">
        {/* Heading */}
        <h2 className="text-[38px] text-center md:text-start mt-[90px] ml-[30px] md:ml-[120px] md:mt-[100px] xl:ml-0 xl:mt-0 font-[700] text-[#21215F] mb-[20px]">
          Services
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center md:justify-around xl:justify-between p-10 md:p-0">
          {/* Card 01 */}
          <Link href="/Services" className="relative w-[240px] h-[260px] md:w-[190px] md:h-[220px] xl:w-[283px] xl:h-[290px]">
            <Image
              src={serveOne}
              alt="service 01"
              className="z-[-1]  h-full rounded-[10px] object-cover"
            ></Image>
            {/* white gradient */}
            <div className="absolute inset-0 bg-white opacity-[30%] rounded-[10px]"></div>
            {/* black gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black rounded-[10px]"></div>
            {/* topic */}
            <div className="absolute inset-0 text-center mt-[200px] md:mt-[150px] xl:mt-[220px]">
              <p className="text-white xl:text-[20px] font-[700]">
                Work Permit Assistance
              </p>
            </div>
          </Link>

          {/* Card 02 */}
          <Link href="/Services"  className="relative w-[240px] h-[260px] md:w-[190px] md:h-[220px] xl:w-[283px] xl:h-[290px]">
            <Image
              src={serveTwo}
              alt="service 01"
              className="z-[-1] h-full rounded-[10px] object-cover"
            ></Image>
            {/* white gradient */}
            <div className="absolute inset-0 bg-white opacity-[30%] rounded-[10px]"></div>
            {/* black gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black rounded-[10px]"></div>
            {/* topic */}
            <div className="absolute inset-0 text-center mt-[200px] md:mt-[150px] xl:mt-[220px]">
              <p className="text-white xl:text-[20px] font-[700] ">
                Financial Assistance for Applicants
              </p>
            </div>
          </Link>

          {/* Card 03 */}
          <Link href="/Services"  className="relative w-[240px] h-[260px] md:w-[190px] md:h-[220px] xl:w-[283px] xl:h-[290px]">
            <Image
              src={serveThree}
              alt="service 01"
              className="z-[-1] h-full rounded-[10px] object-cover"
            ></Image>
            <div className="absolute inset-0 bg-white opacity-[30%] rounded-[10px]"></div>
            {/* black gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black rounded-[10px]"></div>
            {/* topic */}
            <div className="absolute inset-0 text-center mt-[200px] md:mt-[150px] xl:mt-[220px]">
              <p className="text-white xl:text-[20px] font-[700]">
                Career Counseling &
                <br />
                Pre-Departure Support
              </p>
            </div>
          </Link>

          {/* Card 04 */}
          <Link href="/Services"  className="relative w-[240px] h-[260px] md:w-[190px] md:h-[220px] xl:w-[283px] xl:h-[290px]">
            <Image
              src={serveFour}
              alt="service 01"
              className="z-[-1] h-full rounded-[10px] object-cover"
            ></Image>
            <div className="absolute inset-0 bg-white opacity-[30%] rounded-[10px]"></div>
            {/* black gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black rounded-[10px]"></div>
            {/* topic */}
            <div className="absolute inset-0 text-center mt-[200px] md:mt-[150px] xl:mt-[220px]">
              <p className="text-white xl:text-[20px] font-[700]">
                Job Placement in UK Care Homes
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default services;

services;
