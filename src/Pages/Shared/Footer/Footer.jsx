import React from "react";
import { Link } from "react-router-dom";
import image from "./footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${image})`, backgroundSize: "cover" }}>
      <footer className="p-6">
        <div className="container flex justify-between px-32">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">SERVICES</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/">
                Emergency Checkup
              </Link>
              <Link rel="noopener noreferrer" to="/">
                Monthly Checkup
              </Link>
              <Link rel="noopener noreferrer" to="/">
                Weekly Checkup
              </Link>
              <Link rel="noopener noreferrer" to="/">
                Deep Checkup
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">ORAL HEALTH</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/">
                Fluoride Treatment
              </Link>
              <Link rel="noopener noreferrer" to="/">
                Cavity Filling
              </Link>
              <Link rel="noopener noreferrer" to="/">
                Teath Whitening
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">OUR ADDRESS</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/">
                New York - 101010 Hudson
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-400">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
