import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../../../Router/Loader/Loader";
import Modal from "../AddDoctor/Modal/Modal";

const ManageDoctor = () => {
  const [deleteDoctor, setDelete] = useState(null);

  const {
    data: datas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            auth: `bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (er) {
        console.log(er);
      }
    },
  });

  const doctorDelete = (doctor) => {
    const id = doctor._id;
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "delete",
      headers: {
        auth: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
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
            title: "Delete successfully",
          });
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-20">
      <div className=" md:px-10">
        <table className="table  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    alt=""
                    className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400"
                    src={user.Photo}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.specialty}</td>
                <td>
                  <label
                    htmlFor="my-modal-3"
                    onClick={() => setDelete(user)}
                    className="btn btn-sm bg-red-500 border-0 hover:bg-red-800"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <Modal doctorDelete={doctorDelete} doctor={deleteDoctor}></Modal>
      )}
    </div>
  );
};

export default ManageDoctor;
