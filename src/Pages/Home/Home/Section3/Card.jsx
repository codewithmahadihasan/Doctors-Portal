import React from "react";

const Card = ({ data }) => {
  return (
    <div className="text-center border-2 p-10 shadow-xl rounded-lg">
      <img className="mx-auto" src={data.picture} alt="" />
      <h1 className="font-bold py-4">{data.name}</h1>
      <p>{data.info}</p>
    </div>
  );
};

export default Card;
