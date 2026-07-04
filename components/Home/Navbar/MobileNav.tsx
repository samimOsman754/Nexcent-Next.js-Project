import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
};

const MobileNav = ({ isMobileNavOpen, closeMobileNav }: Props) => {
  const sidebarClass = isMobileNavOpen ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 transform transition-transform duration-500 z-40 bg-black opacity-70 w-full h-screen ${sidebarClass}`}
      ></div>
      {/* Mobile Navigation Links */}
      <div
        className={`fixed left-0 top-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-50 pl-8 pr-8 ${sidebarClass}`}
      >
        {NAVLINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="text-white hover:text-green-400 font-semibold text-lg transition-colors duration-300"
            >
              {link.label}
            </Link>
          );
        })}
        {/* Register Button */}
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold mt-4 w-full">
          Register Now
        </button>
        {/* Close Icon */}
        <CgClose
          className="absolute top-6 right-6 text-3xl cursor-pointer text-white hover:text-gray-300 transition-colors duration-300"
          onClick={closeMobileNav}
        />
      </div>
    </div>
  );
};

export default MobileNav;
