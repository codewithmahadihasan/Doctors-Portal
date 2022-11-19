import React, { useState } from "react";
import ApponmentSection from "./Banar/ApponmentSection";
import Banar2 from "./Banar/Banar2";

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div>
      <Banar2 selectDate={selectDate} setSelectDate={setSelectDate}></Banar2>
      <ApponmentSection selectDate={selectDate}></ApponmentSection>
    </div>
  );
};

export default Appointment;
