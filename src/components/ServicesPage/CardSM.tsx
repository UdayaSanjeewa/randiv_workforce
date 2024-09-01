"use client";
import React, { useState } from "react";
import Image from "next/image";

function CardSM(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the content into an array of words
  const words = props.content.split(" ");

  // Join the first 50 words back into a string
  const truncatedContent = words.slice(0, 20).join(" ");

  return (
    <div className="flex flex-col gap-[20px] md:gap-[30px] mb-[40px] md:mb-[70px] w-full max-w-[350px] md:max-w-[600px] mx-auto bg-white shadow-lg rounded-[10px] ">
      <div className="flex-shrink-0 w-full h-auto mx-auto">
        <Image
          src={props.img}
          alt=""
          className="w-full h-full rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-[18px] md:text-[24px] font-[700] pl-5">
          {props.topic}
        </h1>

        {/* Content for small and medium screens (truncated) */}
        <p className="text-[14px] md:text-[16px] font-[400] w-full p-5">
          {isExpanded ? props.content : `${truncatedContent}...`}
        </p>

        {/* Facilities Section - Always shown */}
        <div
          className={`flex flex-col gap-4 ${
            isExpanded ? "flex" : "hidden"
          } p-5`}
        >
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[15px]">
            <div className="w-full max-w-[200px] h-[40px] text-white font-[700] text-[12px] md:text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center mx-auto">
              {props.facilityOne}
            </div>
            <p className="text-[12px] md:text-[14px] font-[400] text-center md:text-left">
              {props.facilityOneContent}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[15px]">
            <div className="w-full max-w-[200px] h-[40px] text-white font-[700] text-[12px] md:text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center mx-auto">
              {props.facilityTwo}
            </div>
            <p className="text-[12px] md:text-[14px] font-[400] text-center md:text-left">
              {props.facilityTwoContent}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[15px]">
            <div className="w-full max-w-[200px] h-[40px] text-white font-[700] text-[12px] md:text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center mx-auto">
              {props.facilityThree}
            </div>
            <p className="text-[12px] md:text-[14px] font-[400] text-center md:text-left">
              {props.facilityThreeContent}
            </p>
          </div>
        </div>

        {/* Show "See More" button only on small and medium screens */}
        <button
          className="mt-3 text-[#21215F] font-[700] text-[14px] md:text-[16px] underline pb-5"
          onClick={handleSeeMore}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default CardSM;
