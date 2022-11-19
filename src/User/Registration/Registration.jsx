import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Auth/AuthProvider";

const Registration = () => {
  const [error, setError] = useState();
  const { createUser, google, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fromHandaler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const pass = event.target.password.value;
    if (pass.length < 6) {
      return setError("use more than six digits as password");
    } else {
      setError("");
      createUser(email, pass, name);
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl dark:text-gray-900">
          <h1 className="text-2xl font-bold text-center">Registration</h1>
          <form
            onSubmit={fromHandaler}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-900">Name</label>
              <input
                required
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-md border  dark:border-gray-700 text-black  focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-900">E-mail</label>
              <input
                required
                type="text"
                name="email"
                className="w-full px-4 py-3 rounded-md border  dark:border-gray-700 text-black  focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-900">Password</label>
              <p className="text-red-600">{error}</p>
              <input
                required
                type="password"
                name="password"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 text-black dark:text-gray-900 focus:dark:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="block w-full btn p-3 text-center rounded-sm dark:text-gray-100 dark:bg-[#3A4256]"
            >
              Sign in
            </button>
          </form>
          <p className=" text-center sm:px-6 dark:text-gray-400">
            Do you have any acount ?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className=" text-teal-500 ml-2"
            >
              Log in now
            </Link>
          </p>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>

            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => google()}
              aria-label="Log in with Google"
              className="p-3 rounded-xl flex gap-6 items-center text-black border-2 justify-center w-full hover:bg-gray-300"
            >
              <FaGoogle></FaGoogle> CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
