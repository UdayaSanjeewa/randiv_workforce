"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phoneNumber,
      subject,
      message,
    };

    await axios.post("/api/sendmail", data).then((res) => {
      if (res.data.message) {
        toast.success("Inquiry Sent Successfully");
        setTimeout(()=>{
          router.push('/')          
        }, 300)
      } else {
        toast.success("Inquiry Sending failed, Try again later");
      }
    });
  };

  return (
    <div>
      <form action="" className="p-10" onSubmit={sendMail}>
        {/* Name and Email container */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          {/* Name */}
          <div className="flex flex-col w-full md:w-[266px] lg:w-[300px]">
            <label
              htmlFor="name"
              className="text-[19px] font-[700] text-[#21215F] m-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
              name="fullName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full md:w-[266px] lg:w-[300px]">
            <label
              htmlFor="email"
              className="text-[19px] font-[700] text-[#21215F] m-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
              name="fullName"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="w-full mt-[30px]">
          <label
            htmlFor="phone"
            className="text-[19px] font-[700] text-[#21215F] m-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Phone Number"
            className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
            name="fullName"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>

        {/* Subject */}
        <div className="w-full mt-[30px]">
          <label
            htmlFor="subject"
            className="text-[19px] font-[700] text-[#21215F] m-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            className="w-full h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
            name="fullName"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>

        {/* Message */}
        <div className="w-full mt-[30px]">
          <label
            htmlFor="message"
            className="text-[19px] font-[700] text-[#21215F] m-2"
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

        {/* Submit */}
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
  );
}

export default ContactForm;
