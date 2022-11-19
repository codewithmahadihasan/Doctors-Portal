import React from "react";
import moduleName from "./appointment.png";

const Section7 = () => {
  return (
    <div className="py-20 p-2 ">
      <div
        style={{ background: `url(${moduleName})` }}
        className="text-center rounded-xl py-20"
      >
        <div className="">
          <h1 className="font-bold text-teal-400 text-xl">Contact Us</h1>
          <h1 className="text-2xl text-white">Stay connected with us</h1>
        </div>

        <form className="flex flex-col items-center gap-6 pt-10">
          <input
            required
            className="lg:w-[450px] h-11 px-2 border-2 rounded-lg  border-gray-700"
            type="email"
            placeholder="input required your email"
            name="email"
            id=""
          />

          <input
            required
            className="lg:w-[450px] h-11 px-2 border-2 rounded-lg border-gray-700"
            type="text"
            placeholder="Subject"
            name="subject"
            id=""
          />

          <textarea
            className="lg:w-[450px] h-40 px-2 border-2 rounded-lg border-gray-700"
            type="email"
            placeholder="Write a message"
            name="email"
            id=""
          />
          <button
            type="submit"
            className="inline-flex text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-2 px-6 focus:outline-none  rounded-lg text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section7;
