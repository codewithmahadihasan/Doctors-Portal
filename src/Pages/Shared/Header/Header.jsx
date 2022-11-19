import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPiedPiper } from "react-icons/fa";
import { AuthContext } from "../../../Provider/Auth/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const data = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Our product"
          title="Our product"
          className={({ isActive }) => {
            return isActive
              ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          aria-label="Our product"
          title="Our product"
          className={({ isActive }) => {
            return isActive
              ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appointment"
          aria-label="Product pricing"
          title="Product pricing"
          className={({ isActive }) => {
            return isActive
              ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400";
          }}
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          aria-label="Product pricing"
          title="Product pricing"
          className={({ isActive }) => {
            return isActive
              ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400";
          }}
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          aria-label="Dash Board"
          title="About us"
          className={({ isActive }) => {
            return isActive
              ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400";
          }}
        >
          Dashboard
        </NavLink>
      </li>
      {user ? <h1 className="text-2xl font-bold">{user.displayName}</h1> : ""}
    </>
  );

  return (
    <div>
      <div className="">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <FaPiedPiper className="text-5xl  text-teal-400"></FaPiedPiper>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
                Doctor
              </span>
            </Link>
            <ul className=" items-center hidden space-x-8 lg:flex">
              {data}
              {user ? (
                <>
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                      title="log Out"
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to={"/login"}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    title="log Out"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <FaPiedPiper className="text-5xl  text-teal-400"></FaPiedPiper>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
                            Doctor
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-center">
                        {data}
                        <li>
                          <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
