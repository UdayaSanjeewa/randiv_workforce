import Image from 'next/image';
import React from 'react';
import ServicesBG from "@/resources/servicesBG.jpg";

function Heading() {
  return (
    <div className='relative'>
      <Image src={ServicesBG} alt='Our Services Background' className='w-full h-[639px] object-cover'/>
      <p className='absolute inset-0 text-white font-[700] text-[100px] ml-[350px] mt-[270px]'>
        Our
      </p>
      <p className='absolute inset-0 text-white font-[700] text-[100px] ml-[350px] mt-[370px]'>
        Services
      </p>
    </div>
  );
}

export default Heading;
