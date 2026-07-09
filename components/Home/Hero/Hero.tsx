import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between gap-8 w-[90%] lg:w-[85%] mx-auto py-12 lg:py-20">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <FaCode className="w-10 h-10 text-white bg-green-600 rounded-md" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 leading-tight">
            Lessons and insights <br />{" "}
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="text-gray-600 mt-4 lg:mt-6 font-normal text-sm sm:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-600 text-white py-2 px-6 mt-6 lg:mt-8 rounded-md hover:bg-green-700 transition duration-300 font-medium">
            Register
          </button>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/Illustration.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full max-w-sm lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
