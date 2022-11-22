import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Router/Loader/Loader";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const apiKey = process.env.REACT_APP_imgBB;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

  

    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            Photo: imageData.data.url,
            name: data.name,
            email: data.email,
            specialty: data.specialty,
          };

          //Save doctors Database

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              auth: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire({
                  icon: "success",
                  title: "OMG...",
                  text: "Added Doctor Successfully",
                });
                navigate("/dashboard/manage-doctor");
              }
            });
        }
      });
  };

  const url = "http://localhost:5000/specialty";

  const { data: datas = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loader></Loader>;
  }

  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl dark:text-gray-900">
          <form
            onSubmit={handleSubmit(handleAddDoctor)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-900 font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className="w-full px-4 py-3 rounded-md border  dark:border-gray-700 text-black  focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-900 font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="w-full px-4 py-3 rounded-md border  dark:border-gray-700 text-black  focus:dark:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm w-full">
              <label className="block dark:text-gray-900 font-semibold">
                Specialty
              </label>
              <select
                {...register("specialty", { required: true })}
                className="select border-black w-full "
              >
                {datas.map((data) => (
                  <option key={data._id} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full space-y-1 dark:text-gray-100">
              <div className="flex justify-evenly border-2 border-dashed">
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is Required",
                  })}
                  className="w-full py-8 px-6 rounded-md  dark:text-gray-400 dark:bg-gray-200"
                />
              </div>
            </div>
            <input
              className="btn btn-accent w-full mt-4"
              value="Add Doctor"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
