import React from "react";
import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";

const Section2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center  lg:grid-cols-3 mx-4  gap-10 my-20">
      <div
        style={{
          background:
            " linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
        }}
        className="md:w-[400px] w-[360px]   h-44 rounded-lg flex items-center gap-5 p-8"
      >
        <img className="text-[86px] text-white" src={clock} alt="" />
        <div>
          <h1 className="text-xl text-white font-bold">Opening Hours</h1>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the pri
          </p>
        </div>
      </div>

      <div className="md:w-[400px] w-[360px]    bg-[#3A4256] h-44 rounded-lg flex items-center gap-5 p-8">
        <img className="text-[86px] text-white" src={marker} alt="" />
        <div>
          <h1 className="text-xl text-white font-bold">Visit our location</h1>
          <p className="text-white">Brooklyn, NY 10036, United States</p>
        </div>
      </div>

      <div
        style={{
          background:
            " linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
        }}
        className=" md:w-[400px] w-[360px] h-44 rounded-lg flex items-center gap-5 p-8"
      >
        <img className="text-[86px] text-white" src={phone} alt="" />
        <div>
          <h1 className="text-xl text-white font-bold">Contact us now</h1>
          <p className="text-white">+8801792205520</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
