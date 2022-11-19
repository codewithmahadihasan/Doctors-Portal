import React from "react";
import second from "../../../../assets/images/bg.png";
import chair from "../../../../assets/images/chair.png";

const Banar = () => {
  return (
    <div className="relative -z-50">
      <img
        src={second}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <section className="text-gray-600 body-font relative  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-[#3A4256]">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-2 px-6 focus:outline-none  rounded text-lg">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={chair}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banar;
