import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
export default function Navbar({doc:[docId, setDocId]}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };  

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.getElementById("navbar");

      if (navElement && !navElement.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [])

  return (
    <nav id="navbar" className="bg-white sticky top-0 z-20 w-full dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <NavLink to="/home"
          
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="Flowbite Logo" />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            LiveWell
          </span>
        </NavLink>

        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isMenuOpen?"":"hidden"} flex absolute justify-center mt-[30vh] sm:m-auto sm:relative z-10 w-full md:block md:w-auto opacity-90`}>
          <ul
            className={` flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Fitness{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className={`z-10 mt-2 absolute ${
                  isDropdownOpen ? "" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 bg-transparent dark:bg-gray-700 dark:divide-gray-600 opacity-90`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/men"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Men's Fitness
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Women's Fitness
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink
                      to="/yoga"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yoga
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/calorie"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Diet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/spiritual"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Spiritual
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setDocId(null)}
        >
          {docId!==null?"Log Out":"Log In"}
        </button>
        </NavLink>
      </div>
    </nav>
  );
}
