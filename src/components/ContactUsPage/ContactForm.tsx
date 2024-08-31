import React from "react";

function ContactForm() {
  return (
    <div>
      <form action="">
        {/* name and gender container */}
        <div className="flex justify-evenly">
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
              className="w-[266px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[19px] font-[700] text-[#21215F] m-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-[266px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
            />
          </div>
        </div>

        {/* Phone number */}
        <div className="w-[588px] h-[99px] mt-[30px] ml-[70px]">
          <label
            htmlFor=""
            className="text-[19px] font-[700] text-[#21215F] m-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="w-[588px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
          />
        </div>

        {/* subject */}
        <div className="w-[588px] h-[99px] mt-[30px] ml-[70px]">
          <label
            htmlFor=""
            className="text-[19px] font-[700] text-[#21215F] m-2"
          >
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="w-[588px] h-[61px] rounded-[15px] bg-[#D0DBE166] pl-[20px] font-[400] text-[16px]"
          />
        </div>

        {/* message */}
        <div className="w-[588px] h-[169px] mt-[30px] ml-[70px]">
          <label
            htmlFor=""
            className="text-[19px] font-[700] text-[#21215F] m-2"
          >
            Message
          </label>
          <textarea
            id=""
            placeholder="Message"
            className="w-[588px] h-[131px] rounded-[15px] bg-[#D0DBE166] pl-[20px] pt-[20px] font-[400] text-[16px]"
          />
        </div>

        <div className="w-full flex items-center justify-center mt-[30px]">
          {/* Submit */}
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className="w-[258px] h-[53px] rounded-[15px] bg-[#50B2E3] text-white text-[20px] font-[700]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
