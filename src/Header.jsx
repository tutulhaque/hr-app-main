import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a href="/" className="text-2xl font-bold ml-2">
            <span className="text-[#412ad5]">HR</span>-APP
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li>
              <Link to="/employees">Employee</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/employee/add">Add Employee</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-base-100 shadow px-4 py-2 space-y-2 text-lg font-medium">
          <li>
            <Link to="/employees" onClick={() => setIsMobileMenuOpen(false)}>
              Employee
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/employee/add" onClick={() => setIsMobileMenuOpen(false)}>
              Add Employee
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
