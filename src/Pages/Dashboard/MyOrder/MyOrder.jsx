import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      const data = await res.json();
      return data;
    },
  });

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "put",
      headers: {
        auth: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-center py-10">My Order</h1>

      <div className=" md:px-10">
        <table className="table  w-full">
          <thead>
            <tr>
              <th>Number of user</th>
              <th>NAME</th>
              <th>Email</th>
              <th>Request</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn-accent rounded btn-xs"
                    onClick={() => handleUpdate(user._id)}
                  >
                    {user.role ? "Appoed" : "Make admin"}
                  </button>
                </td>
                <td>
                  <button>
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
