import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Provider/Auth/AuthProvider";
import Swal from "sweetalert2";

const Tost = ({ data, selectDate, setTost, refetch }) => {
  const { user } = useContext(AuthContext);

  const formHandler = (event) => {
    event.preventDefault();
    const from = event.target;
    const subject = data.name;
    const slot = from.slot.value;
    const date = format(selectDate, "PP");
    const name = from.name.value;
    const number = from.phone.value;
    const email = from.email.value;

    if (number.length < 5) {
      Swal.fire({
        icon: "info",
        title: "Sorry",
        text: "you could not input your number",
      });
      return;
    } else {
      const booking = {
        subject,
        date,
        slot,
        name,
        number,
        email,
      };

      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              icon: "success",
              title: "Good job",
              text: "Added Apointment sucessfully",
            });
            refetch();
          } else {
            Swal.fire({
              icon: "info",
              title: "Try again another date",
              text: `${data.message}`,
            });
          }
        });
      from.reset();
    }
  };

  return (
    <div>
      <input type="checkbox" id={data} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={data}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{data?.name}</h3>
          <form onSubmit={formHandler} className="text-center">
            <h1
              name="date"
              className=" bg-gray-300 py-3 rounded-xl text-start  pl-4 w-full mt-4"
            >
              {format(selectDate, "PP")}
            </h1>
            {/* Select  */}
            <div className="form-control w-full mt-4 ">
              <select
                name="slot"
                className="select select-bordered bg-gray-300"
              >
                {data?.slots.map((date, index) => (
                  <option value={date} key={index}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
            {/* Select End  */}
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              required
              placeholder="Full Name"
              className="input input-bordered w-full  mt-4"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full  mt-4"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="E-mail"
              className="input input-bordered w-full  mt-4"
            />
            <button className="w-full ">
              <label
                className="w-full bg-gradient-to-r bg-[#3A4256] uppercase text-white py-3 rounded-lg cursor-pointer mt-4"
                htmlFor={data}
                type="submit"
              >
                Submit
              </label>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tost;
