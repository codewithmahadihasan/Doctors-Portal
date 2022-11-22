import React, { useContext } from "react";
import { FaDiceD6, FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../CostomHoq/Hook";
import { AuthContext } from "../../Provider/Auth/AuthProvider";
import { GoVerified } from "react-icons/go";
import { BiUserPlus } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const DashboardHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email, true);

  return (
    <div>
      <div className="h-screen p-3 w-56 space-y-2  dark:text-gray-900">
        <div className="flex items-center p-2 space-x-4">
          <div className="rounded-full border-2 w-14  p-0.5 bg-purple-400 border-blue-00 ">
            <img
              className="rounded-full "
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://i.ibb.co/hHkZXgh/Basic-Ui-186.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <h2 className=" text-xs flex items-center gap-1 font-semibold text-start">
              {user?.displayName}{" "}
              {isAdmin && <GoVerified className="text-blue-700"></GoVerified>}
            </h2>
            <span className="flex items-center space-x-1">
              <Link
                to="/user"
                className="text-xs hover:underline my-0.5 dark:text-gray-400"
              >
                View profile
              </Link>
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {!isAdmin && (
              <li className="hover:dark:bg-gray-200">
                <NavLink
                  rel="noopener noreferrer"
                  to="/dashboard/appointment"
                  className={({ isActive }) => {
                    return isActive
                      ? "flex items-center p-2 space-x-3 rounded-md bg-gray-300"
                      : "flex items-center p-2 space-x-3 rounded-md";
                  }}
                >
                  <FaDiceD6 className="text-xl text-gray-500"></FaDiceD6>
                  <span>My Apointment</span>
                </NavLink>
              </li>
            )}

            {isAdmin && (
              <>
                <li className="hover:dark:bg-gray-200">
                  <NavLink
                    to="/dashboard/all-user"
                    className={({ isActive }) => {
                      return isActive
                        ? "flex items-center p-2 space-x-3  bg-gray-300"
                        : "flex items-center p-2 space-x-3 ";
                    }}
                  >
                    <FaUsers className="text-xl text-gray-500"></FaUsers>
                    <span>All User</span>
                  </NavLink>
                </li>
                <li className="hover:dark:bg-gray-200">
                  <NavLink
                    to="/dashboard/add-doctor"
                    className={({ isActive }) => {
                      return isActive
                        ? "flex items-center p-2 space-x-3  bg-gray-300"
                        : "flex items-center p-2 space-x-3 ";
                    }}
                  >
                    <BiUserPlus className="text-xl text-gray-500"></BiUserPlus>
                    <span>Add Doctor</span>
                  </NavLink>
                </li>
                <li className="hover:dark:bg-gray-200">
                  <NavLink
                    to="/dashboard/manage-doctor"
                    className={({ isActive }) => {
                      return isActive
                        ? "flex items-center p-2 space-x-3  bg-gray-300"
                        : "flex items-center p-2 space-x-3 ";
                    }}
                  >
                    <MdManageAccounts className="text-xl text-gray-500"></MdManageAccounts>
                    <span>Manage Doctor</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li className="hover:dark:bg-gray-300">
              <button
                onClick={() => logOut()}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
