import React from "react";
import Card from "./Card";
import img1 from "./people1.png";
import img2 from "./people2.png";
import img3 from "./people3.png";
import icon from "./quote.svg";

const Section6 = () => {
  const datas = [
    {
      id: 1,
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
      name: "Winson Herry",
      country: "California",
    },
    {
      id: 2,
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img2,
      name: "Winson Herry",
      country: "United State",
    },
    {
      id: 3,
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
      name: "Winson Herry",
      country: "Cina",
    },
  ];

  return (
    <div>
      <div className=" p-4 flex justify-between items-center">
        <div>
          <h1 className="text-teal-400 font-bold py-4 text-xl">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-52" src={icon} alt="" />
        </div>
      </div>
      <div className="grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {datas.map((data) => (
          <Card data={data} key={data.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Section6;
