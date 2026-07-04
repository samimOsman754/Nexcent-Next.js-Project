"use client";
import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openMobileNav: () => void;
};

const Nav = ({ openMobileNav }: Props) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-20 w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="shrink-0">
          <Logo  />
        </div>
        {/* navigation links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVLINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-gray-700 hover:text-green-600 font-semibold text-sm transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </div>
        {/* Register button */}
        <div>
          <button className="hidden lg:inline-block bg-green-600 text-white hover:bg-green-700 font-semibold py-2.5 px-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm">
            Register Now →
          </button>
          {/* Burger icon for mobile */}
          <HiBars3BottomRight
            onClick={openMobileNav}
            className="text-gray-700 hover:text-green-600 cursor-pointer lg:hidden text-2xl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
