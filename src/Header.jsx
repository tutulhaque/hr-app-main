import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <a href={"/"} className="btn btn-ghost text-xl">
            HR-APP
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/employees">Employee</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/employee/add">Add Employee</Link>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
