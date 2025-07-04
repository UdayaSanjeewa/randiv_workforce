"use client";
import React, { useState } from "react";
import formBg from "@/resources/form-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

function ApplyForm() {
  const router = useRouter()
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      gender,
      phoneNumber,
      experience,
      message,
    };

    await axios.post("/api/applyfrom", data).then((res) => {
      if (res.data.message) {
        toast.success("Applyied Successfully");
        setTimeout(()=>{
          router.push('/')          
        }, 300)
      } else {
        toast.success("Apply failed, Try again later");
      }
    });
  };

  return (
    <div className="relative h-[953px]">
      <Image
        src={formBg}
        alt="Form Background"
        layout="fill"
        className="z-[-1] opacity-[85%] object-cover hidden md:block "
      />

      <div className="absolute inset-0 w-full flex items-center justify-center p-4">
        <div className="w-full max-w-[833px] flex flex-col justify-between items-center">
          {/* Heading */}
          <div className="w-full max-w-[341px] h-auto rounded-[20px] bg-white flex items-center justify-center py-4">
            <p className="text-[#21215F] text-[28px] md:text-[35px] lg:text-[45px] font-[700]">Apply Form</p>
          </div>

          {/* Form */}
          <div className="w-full max-w-[833px] bg-white rounded-[12px] mt-8 p-6 md:p-10 lg:p-12">
            <form action="" onSubmit={sendMail}>
              {/* Name and Gender Container */}
              <div className="flex flex-col md:flex-row  justify-between md:space-x-4">
                {/* Name */}
                <div className="flex flex-col mb-4 md:mb-0">
                  <label
                    htmlFor="name"
                    className="text-[19px] font-[700] text-[#21215F] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full md:w-[320px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                    name="fullName"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                {/* Gender */}
                <div className="flex flex-col mb-4 md:mb-0">
                  <label
                    htmlFor="gender"
                    className="text-[19px] font-[700] text-[#21215F] mb-2"
                  >
                    Gender
                  </label>
                  <input
                    id="gender"
                    type="text"
                    placeholder="Gender"
                    className="w-full md:w-[320px]  h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                    name="fullName"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col mt-[30px]">
                <label
                  htmlFor="phone"
                  className="text-[19px] font-[700] text-[#21215F] mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                  name="fullName"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>

              {/* Working Experience */}
              <div className="flex flex-col mt-[30px]">
                <label
                  htmlFor="experience"
                  className="text-[19px] font-[700] text-[#21215F] mb-2"
                >
                  Working Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  placeholder="Working Experience"
                  className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
                  name="fullName"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col mt-[30px]">
                <label
                  htmlFor="message"
                  className="text-[19px] font-[700] text-[#21215F] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="w-full h-[131px] rounded-[15px] bg-[#D0DBE166] pl-[20px] pt-[20px] font-[400] text-[16px]"
                  name="fullName"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex items-center justify-center mt-[30px]">
                <button
                  type="submit"
                  className="w-full max-w-[258px] h-[53px] rounded-[15px] bg-[#50B2E3] text-white text-[20px] font-[700]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
