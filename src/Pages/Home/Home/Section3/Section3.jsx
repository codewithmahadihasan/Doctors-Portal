import React from "react";
import Card from "./Card";
import img1 from "./cavity.png";
import img2 from "./fluoride.png";
import img3 from "./whitening.png";

const Section3 = () => {
  const datas = [
    {
      id: 1,
      picture: img1,
      name: " Cavity Filling",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      picture: img2,
      name: " Fluoride Treatment",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      picture: img3,
      name: " Teeth Whitening",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="my-20 p-6 md:p-12 lg:p-0">
      <header className="text-center my-20">
        <h1 className="font-bold text-4xl text-teal-400">OUR SERVICES</h1>
        <h2 className="text-3xl my-4">Services We Provide</h2>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {datas.map((data) => (
          <Card data={data} key={data.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Section3;
