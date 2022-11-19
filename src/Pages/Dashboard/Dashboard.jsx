import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Auth/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user.email}`;
  const { data: datas = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          auth: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(datas);

  return (
    <div className="p-4  ">
      <h1 className="text-4xl text-center py-10 ">My Appointment</h1>

      {!datas.message ? (
        datas.length ? (
          <div className=" md:px-10">
            <table className="table  w-full">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>NAME</th>
                  <th>SERVICE</th>
                  <th>DATE</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, i) => (
                  <tr key={data._id}>
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.subject}</td>
                    <td>{data.date}</td>
                    <td>{data.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-5xl font-bold flex justify-center items-center py-">
            You do not added any Appointment
          </h1>
        )
      ) : (
        <>
          <h1 className="text-5xl font-bold flex justify-center items-center py-">
            {" "}
            Unauthorize User
          </h1>
          <div className="flex justify-center py-20">
            <button
              className="px-10 py-2  bg-violet-500 rounded"
              onClick={() => logOut()}
            >
              {" "}
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
