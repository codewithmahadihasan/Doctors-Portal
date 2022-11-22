import { React, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/Auth/AuthProvider";

const CardAponment = ({ data, setTost }) => {
  const { user } = useContext(AuthContext);

  const buttonHandeler = () => {
    Swal.fire({
      title: "Login First ",
      icon: "warning",
      footer: '<a href="/login">Tab and go to login</a>,',
    });
  };
  return (
    <div className="border-2 text-center py-10 rounded-xl shadow-xl">
      <h1 className="text-xl font-bold text-teal-400 my-2">{data.name}</h1>
      <h1 className="text-lg font-semibold text-teal-400 my-2">
        {data.price ? ` Price : ${data.price} Taka` : "Free"}
      </h1>
      <p>{data.slots.length > 0 ? data.slots[0] : "Try Another Day"}</p>
      <p className="my-2">
        {data.slots.length} {data.slots.length > 1 ? "Spaces" : "Space"}{" "}
        Available
      </p>

      {user ? (
        <label
          htmlFor={data}
          disabled={data.slots.length === 0}
          onClick={() => {
            setTost(data);
          }}
          className={
            data.slots.length === 0
              ? "bg-gray-500 btn"
              : "btn inline-flex text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-1 px-3 focus:outline-none  rounded text-md"
          }
        >
          Appointment
        </label>
      ) : (
        <button
          onClick={() => buttonHandeler()}
          className="btn inline-flex text-white border-0 bg-gradient-to-r from-[#19D3AE]  to-[#0FCFEC] py-1 px-3 focus:outline-none  rounded text-md"
        >
          {" "}
          Appointment
        </button>
      )}
    </div>
  );
};

export default CardAponment;
