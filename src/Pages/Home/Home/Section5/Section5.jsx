import React from "react";
import beg from "./appointment.png";
import image from "./doctor-small.png";

const Section5 = () => {
  return (
    <div>
      <section
        style={{ background: `url(${beg})` }}
        className="text-gray-600 my-20 py-20 lg:py-0 body-font"
      >
        <div className="container   mx-auto flex  px-4 lg:px-20  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full hidden lg:block  md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover  -mt-32 w-[600px] h-[636px] mb-0  object-center rounded"
              alt="hero"
              src={image}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:flex flex-col md:items-start md:text-left items-center text-start ">
            <h1 className="font-bold text-teal-400  my-4">Appointment</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Make an appointment Today
            </h1>
            <p className="mb-8 text-gray-300 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>

            <button className=" text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-2 px-6 focus:outline-none rounded text-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
