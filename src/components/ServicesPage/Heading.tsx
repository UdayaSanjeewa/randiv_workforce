import Image from 'next/image';
import React from 'react';
import ServicesBG from "@/resources/servicesBG.jpg";

function Heading() {
  return (
    <div className='relative'>
      <Image 
        src={ServicesBG} 
        alt='Our Services Background' 
        className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[639px] object-cover'
      />
      <p className='absolute inset-0 text-white font-[700] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] ml-[50px] sm:ml-[150px] md:ml-[250px] lg:ml-[350px] mt-[150px] sm:mt-[200px] md:mt-[250px] lg:mt-[270px]'>
        Our
      </p>
      <p className='absolute inset-0 text-white font-[700] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] ml-[50px] sm:ml-[150px] md:ml-[250px] lg:ml-[350px] mt-[230px] sm:mt-[300px] md:mt-[340px] lg:mt-[370px]'>
        Services
      </p>
    </div>
  );
}

export default Heading;
