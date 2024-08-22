import { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownState((prevState) => (prevState === menu ? null : menu));
  };

  return (
    <nav className="bg-custom-gray w-full">
      <div className="flex justify-between items-center py-4 px-4 w-full">
        {/* Logo in Top Left Corner */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-16 w-auto mr-3" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <i
              className={
                isOpen ? "fas fa-times text-2xl" : "fas fa-bars text-2xl"
              }
            ></i>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="md:flex space-x-6 hidden ml-[100px] relative flex items-center justify-center">
          {/* Home Dropdown for Desktop */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("home")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a
              href="#home"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik"
            >
              Home
            </a>
            {dropdownState === "home" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                      Home-1
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                      Home-2
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Home-3
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Home-4
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Home-5
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Home-6
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Home-7
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("jobs")}
            onMouseLeave={() => toggleDropdown(null)}
          >
          <a
              href="#jobs"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md"
            >
              Jobs
            </a>
            {dropdownState === "jobs" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                      Jobs Grid
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                      Jobs List
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Job Details
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Apply Jobs
                    </a>
                  </li>
                </ul>
              </div>
            )}
            </div>

            <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("employers")}
            onMouseLeave={() => toggleDropdown(null)}
          >
          <a
              href="#employers"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md"
            >
              Employers
            </a>
            {dropdownState === "employers" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                      Employers Grid
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                      Employers List
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Employer Details
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Profile
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Resume
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Manage Jobs
                    </a>
                  </li>
                </ul>
              </div>
            )}
            </div>


            <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("pages")}
            onMouseLeave={() => toggleDropdown(null)}
          >
          <a
              href="#pages"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md"
            >
              Pages
            </a>
            {dropdownState === "pages" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                      About Us
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                      Pricing
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Error 404
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      FAQ's
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Contact Us
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            )}
            </div>


            <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("candidates")}
            onMouseLeave={() => toggleDropdown(null)}
          >
          <a
              href="#candidates"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md"
            >
              Candidates
            </a>
            {dropdownState === "candidates" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    Candidates Grid
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                    Candidates List
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Candidates Details
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                     My Profile
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Dashboard
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Applied Jobs
                    </a>
                  </li>
                </ul>
              </div>
            )}
            </div>

            <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("blog")}
            onMouseLeave={() => toggleDropdown(null)}
          >
          <a
              href="#blog"
              className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md"
            >
              Blog
            </a>
            {dropdownState === "blog" && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg z-10">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-1" className="text-gray-700 hover:text-green-700">
                      Blog
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-2" className="text-gray-700 hover:text-green-700">
                      Blog Grid
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Blog Grid-2
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Blog List
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#home-3" className="text-gray-700 hover:text-green-700">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </div>
            )}
            </div>

            


          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <button className="text-gray-700 hover:text-green-700">
              <i className="fas fa-search text-2xl"></i>
            </button>
            <button className="icon-button bg-custom-green-light p-2 rounded-full text-white hover:bg-green-200 flex items-center space-x-2">
              <i className="fas fa-sign-in-alt text-2xl"></i>
              <p className="hidden md:block">Sign Up</p>
            </button>
            <button className="icon-button bg-custom-green p-2 rounded-full text-white hover:bg-green-800 flex items-center space-x-2">
              <i className="fas fa-briefcase text-2xl"></i>
              <p className="hidden md:block">Post a Job</p>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 bg-white z-10 md:hidden"
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo in Mobile Menu */}
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Mobile Links with Dropdowns */}
        <div className="flex flex-col items-center space-y-6 mt-8">
          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("home")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Home
              <i
                className={`fas ${
                  dropdownState === "home" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "home" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    Home-1
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-2" className="text-gray-700 hover:text-green-700">
                    Home-2
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Home-3
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Home-4
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Home-5
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Home-6
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Home-7
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("jobs")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Jobs
              <i
                className={`fas ${
                  dropdownState === "jobs" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "jobs" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#Jobs-Grid" className="text-gray-700 hover:text-green-700">
                    Jobs Grid
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#Jobs-List" className="text-gray-700 hover:text-green-700">
                    Jobs List
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#Job-Details" className="text-gray-700 hover:text-green-700">
                    Job Details
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#apply-Jobs" className="text-gray-700 hover:text-green-700">
                    Apply Jobs
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("employers")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Employers
              <i
                className={`fas ${
                  dropdownState === "employers" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "employers" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    Employers Grid
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-2" className="text-gray-700 hover:text-green-700">
                    Employers List
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Employer Details
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Profile
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Resume
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   Manage Jobs
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Pages
              <i
                className={`fas ${
                  dropdownState === "pages" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "pages" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    About Us
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-2" className="text-gray-700 hover:text-green-700">
                    Pricing
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Error 404
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   FAQ's
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Contact Us
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("candidates")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Candidates
              <i
                className={`fas ${
                  dropdownState === "candidates" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "candidates" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    Candidates Grid
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-2" className="text-gray-700 hover:text-green-700">
                    Candidates List
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Candidates Details
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Dashboard
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    My Profile
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   Applied Jobs
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   My Resume
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   Saved Jobs
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="w-full text-center">
            <button
              onClick={() => toggleDropdown("blog")}
              className="flex justify-between items-center text-gray-700 hover:text-green-700 text-xl font-rubik w-full"
            >
              Blog
              <i
                className={`fas ${
                  dropdownState === "blog" ? "fa-chevron-up" : "fa-chevron-down"
                } ml-2`}
              ></i>
            </button>
            {dropdownState === "blog" && (
              <ul className="mt-2 bg-gray-100 w-full">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-1" className="text-gray-700 hover:text-green-700">
                    Blog
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-2" className="text-gray-700 hover:text-green-700">
                   Blog Grid
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                   Blog Grid-2
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Blog List
                  </a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <a href="#home-3" className="text-gray-700 hover:text-green-700">
                    Blog Details
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Repeat for other navbar links like Jobs, Employers, Pages, etc. */}

          {/* Mobile Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            <button className="text-gray-700 hover:text-green-700">
              <i className="fas fa-search text-2xl"></i>
            </button>
            <button className="bg-custom-green-light p-2 rounded-full text-green-700 hover:bg-green-200">
              <i className="fas fa-sign-in-alt text-2xl"></i>
            </button>
            <button className="bg-custom-green p-2 rounded-full text-white hover:bg-green-800">
              <i className="fas fa-briefcase text-2xl"></i>
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
