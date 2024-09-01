import React from "react";

import Image from "next/image";

function Card(props: any) {
  return (
    <div className="xl:w-[1091px] h-[441px] flex flex-row lg:gap-[40px] xl:gap-[80px] ml-[100px] xl:ml-0 mb-[100px] ">
      <div className="">
        <Image
          src={props.img}
          alt=""
          className="xl:w-[297px] w-[250px] h-[441px] rounded-[10px] object-cover"
        ></Image>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-[35px] font-[700]">{props.topic}</h1>
        <p className="w-[714px] h-[130px] text-[18px] font-[400]">
          {props.content}
        </p>

        <div className="w-[621px] h-[290px] flex flex-col justify-evenly">
          <div className="flex gap-[20px]">
            <div className="w-[241px] h-[40px] text-white font-[700] text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center">
              {props.facilityOne}
            </div>
            <p className="w-[335px] font-[400] text-[16px]">
              {props.facilityOneContent}
            </p>
          </div>
          <div className="flex  gap-[20px]">
            <div className="w-[241px] h-[40px] text-white font-[700] text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center">
              {props.facilityTwo}
            </div>
            <p className="w-[335px] font-[400] text-[16px]">
              {props.facilityTwoContent}
            </p>
          </div>
          <div className="flex  gap-[20px]">
            <div className="w-[241px] h-[40px] text-white font-[700] text-[14px] bg-[#21215F] rounded-[12px] flex justify-center items-center">
              {props.facilityThree}
            </div>
            <p className="w-[335px] font-[400] text-[16px]">
              {props.facilityThreeContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
