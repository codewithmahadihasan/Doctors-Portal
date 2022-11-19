import React from "react";

const Card = ({ data }) => {
  return (
    <div className="border-2 rounded-lg shadow-xl p-6">
      <h1 className="pb-4">{data.info}</h1>

      <div className="flex items-center gap-6 py-4 px-6">
        <img
          className="h-16 w-16 bg-blue-400 rounded-full p-0.5"
          src={data.img}
          alt=""
        />
        <div>
          <h1 className="font-bold">{data.name}</h1>
          <p>{data.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
