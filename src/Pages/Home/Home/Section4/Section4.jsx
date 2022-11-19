import React from "react";
import img from "./treatment.png";

const Section4 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-2 px-6 focus:outline-none  rounded text-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
