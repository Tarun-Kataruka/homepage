import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./landingPage.css";

const LandingPage = () => {
  const [count, setCount] = useState(0);
  const target = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.min(prevCount + 50, target); // Increment by 50 or up to the target
        }
        clearInterval(interval);
        return target;
      });
    }, 25); // Update every 25 milliseconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row h-screen bg-custom-gray">
  {/* Dark Green Box Element */}
  {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:translate-x-1/4 w-8 h-[350px] lg:w-10 lg:h-[540px] border-t-4 border-l-4 lg:border-t-8 lg:border-l-8 border-green-900"> */}
    {/* Top-right corner piece */}
    {/* <div className="absolute top-0 right-0 w-8 h-8 lg:w-10 lg:h-10 border-t-4 border-r-4 lg:border-t-8 lg:border-r-8 border-green-900"></div> */}

    {/* Bottom horizontal line */}
    {/* <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[200px] border-b-4 lg:border-b-8 border-green-900"></div>
  </div> */}
  
  {/* Left Section */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-custom-gray p-6 lg:p-12">
    <div className="settings-icon-container">
      <FaCog className="settings-icon" />
    </div>
    <div className="max-w-lg w-full space-y-8">
      {/* Heading */}
      <div className="text-[32px] lg:text-[56px] leading-[40px] lg:leading-[72px] font-bold mb-8 text-white text-outline font-rubik">
        It's Easy to Find Your
        <span className="text-custom-green-light font-rubik"> Dream Job</span>
      </div>
      <p className="text-custom-green text-lg lg:text-2xl font-normal">
        Your dream job is waiting for you.
      </p>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md w-full lg:w-[596px] mt-8 p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Job Type Dropdown */}
          <div className="flex-1">
            <label className="block text-gray-400 font-medium mb-2">
              TYPE
            </label>
            <select className="w-full p-3 text-gray-700 font-bold">
              <option>Select Category</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="flex-1">
            <label className="block text-gray-400 font-medium mb-2">
              LOCATION
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 placeholder-black font-bold"
              />
              <FaMapMarkerAlt className="mt-2" />
            </div>
          </div>

          {/* Find Job Button */}
          <button className="bg-custom-green-dark hover:bg-black text-white px-6 py-3 rounded-lg font-semibold">
            Find Job
          </button>
        </div>
      </div>

      {/* Candidate Section */}
      <div className="mt-8">
        <p className="text-gray-700 font-semibold">Our More Candidates</p>
        <div className="relative flex items-center mt-4">
          {/* Placeholder candidate avatars */}
          <div className="flex space-x-[-10px]">
            <img
              src="https://via.placeholder.com/40"
              alt="Candidate 1"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Candidate 2"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Candidate 3"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Candidate 4"
              className="w-8 h-8 rounded-full"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Candidate 5"
              className="w-8 h-8 rounded-full"
            />
          </div>
          {/* Counter Text on the right */}
          <p className="text-custom-count text-4xl lg:text-4xl font-bold mt-4 lg:ml-4 mb-2">
            {count}+
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/2 bg-custom-gray flex flex-col items-center">
    <div className="flex-grow"></div>
    <div className="relative w-full">
      <img
        src="heropic.jpg"
        alt="Landing Image"
        className="w-full h-auto object-cover"
      />
    </div>

    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end space-y-24 pr-2">
      <button className="w-32 h-10 bg-gray-200 text-black font-semibold transform rotate-90 origin-right shadow-lg">
        ALL DEMO
      </button>
      <button className="w-32 h-10 bg-custom-green-cart text-white font-semibold transform rotate-90 origin-right shadow-lg">
        BUY NOW
      </button>
    </div>
  </div>
</div>

  );
};

export default LandingPage;
