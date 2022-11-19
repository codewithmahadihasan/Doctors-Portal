import React from "react";
import background from "./bg.png";
import chair from "./chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Banar2 = ({ setSelectDate, selectDate }) => {
  const today = new Date();

  return (
    <div>
      <section
        style={{ background: `url(${background})`, backgroundSize: "cover" }}
      >
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center items-center  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <DayPicker
              mode="single"
              selected={selectDate}
              disabled={{ before: today }}
              onSelect={(data) => {
                if (data) {
                  setSelectDate(data);
                }
              }}
              showOutsideDays
            ></DayPicker>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={chair}
              alt=""
              className="object-contain h-72  w-[600px] lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banar2;
