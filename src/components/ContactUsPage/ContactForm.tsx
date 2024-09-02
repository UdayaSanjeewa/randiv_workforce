import React from "react";

function ContactForm() {
  return (
    <div>
      <form action="" className="p-10">
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
