import { useState } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              <i className={isOpen ? "fas fa-times text-2xl" : "fas fa-bars text-2xl"}></i>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="md:flex space-x-6 hidden ml-auto">
            <a href="#home" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik text-md">Home</a>
            <a href="#jobs" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik">Jobs</a>
            <a href="#employers" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik">Employers</a>
            <a href="#pages" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik">Pages</a>
            <a href="#candidates" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik">Candidates</a>
            <a href="#blog" className="block py-2 md:py-0 text-gray-700 hover:text-green-700 font-rubik">Blog</a>
          </div>

          {/* Desktop Icons */}
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

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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

          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-6 mt-8">
            <a href="#home" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Home</a>
            <a href="#jobs" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Jobs</a>
            <a href="#employers" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Employers</a>
            <a href="#pages" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Pages</a>
            <a href="#candidates" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Candidates</a>
            <a href="#blog" className="text-gray-700 hover:text-green-700 text-xl font-rubik">Blog</a>
          </div>

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
        </motion.div>
    </nav>
  );
};

export default Navbar;

