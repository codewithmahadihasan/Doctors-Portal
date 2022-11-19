import React, { useContext } from "react";
import { FaDiceD6 } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAdmin from "../../CostomHoq/Hook";
import { AuthContext } from "../../Provider/Auth/AuthProvider";

const DashboardHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);

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
            <h2 className="text-lg font-semibold text-start">
              {user?.displayName}
            </h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs hover:underline dark:text-gray-400"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="hover:dark:bg-gray-300 dark:text-gray-700">
              <Link
                rel="noopener noreferrer"
                to="/dashboard"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaDiceD6 className="text-xl text-gray-500"></FaDiceD6>
                <span>My Apointment</span>
              </Link>
            </li>

            {isAdmin && (
              <li className="hover:dark:bg-gray-300">
                <Link
                  to="/dashboard/myorder"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-400"
                  >
                    <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                    <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                    <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                  </svg>
                  <span>Orders</span>
                </Link>
              </li>
            )}
            <li className="hover:dark:bg-gray-300">
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span>Wishlist</span>
              </Link>
            </li>
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
