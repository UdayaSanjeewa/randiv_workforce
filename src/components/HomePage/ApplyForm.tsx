import React from "react";
import formBg from "@/resources/form-bg.png";
import Image from "next/image";

function ApplyForm() {
  return (
    <div className="relative h-[953px]">
      <Image
        src={formBg}
        alt="Form Background"
        layout="fill"
        className="z-[-1] opacity-[85%]"
      />

      <div className="absolute inset-0 w-full flex items-center justify-center">
        <div className="w-[833px] h-[880px] flex flex-col justify-between items-center">
          {/* Heading */}
          <div className="w-[341px] h-[84px] rounded-[20px] bg-white flex items-center justify-center">
            <p className="text-[#21215F] text-[45px] font-[700] ">Apply Form</p>
          </div>

          {/* Form */}
          <div className="w-[833px] h-[735px] rounded-[12px] bg-white">
            <form action="">
              {/* name and gender container */}
              <div className="flex justify-evenly mt-[50px]">
                {/* name */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[19px] font-[700] text-[#21215F] m-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-[313px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                  />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[19px] font-[700] text-[#21215F] m-2"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Gender"
                    className="w-[313px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="w-[692px] h-[99px] mt-[30px] ml-[70px]">
                <label
                  htmlFor=""
                  className="text-[19px] font-[700] text-[#21215F] m-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-[692px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                />
              </div>

              {/* exp */}
              <div className="w-[692px] h-[99px] mt-[30px] ml-[70px]">
                <label
                  htmlFor=""
                  className="text-[19px] font-[700] text-[#21215F] m-2"
                >
                  Working Experience
                </label>
                <input
                  type="text"
                  placeholder="Working Experience"
                  className="w-[692px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                />
              </div>


              {/* message */}
              <div className="w-[692px] h-[169px] mt-[30px] ml-[70px]">
                <label
                  htmlFor=""
                  className="text-[19px] font-[700] text-[#21215F] m-2"
                >
                  Message
                </label>
                <textarea id=""
                  placeholder="Message"
                  className="w-[692px] h-[131px] rounded-[15px] bg-[#D0DBE166] pl-[20px] pt-[20px] font-[400] text-[16px]"
                />
              </div>

            <div className="w-full flex items-center justify-center mt-[30px]">
                {/* Submit */}
                <div className=" flex items-center justify-center">
                    <button type="submit" className="w-[258px] h-[53px] rounded-[15px] bg-[#50B2E3] text-white text-[20px] font-[700]">SUBMIT</button>
                </div>
            </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
