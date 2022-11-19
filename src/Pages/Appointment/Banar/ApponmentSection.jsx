import React, { useState } from "react";
import { format } from "date-fns";
import CardAponment from "./CardAponment";
import Tost from "./Tost";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Router/Loader/Loader";

const ApponmentSection = ({ selectDate }) => {
  const [tost, setTost] = useState(null);
  const date = format(selectDate, "PP");

  const {
    data: datas = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["datas", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointment?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h1 className="font-bold text-xl text-teal-400 text-center mt-10 ">
        Available Appointments on
        <br className="lg:hidden ml-2" />
        {format(selectDate, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 p-6">
        {datas?.map((data) => (
          <CardAponment
            data={data}
            key={data._id}
            setTost={setTost}
          ></CardAponment>
        ))}
      </div>
      <Tost
        selectDate={selectDate}
        setTost={setTost}
        refetch={refetch}
        data={tost}
      ></Tost>
    </div>
  );
};

export default ApponmentSection;
