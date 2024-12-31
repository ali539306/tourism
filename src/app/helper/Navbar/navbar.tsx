"use client";
import React from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

interface Props {
  openNav: () => void;
}
function Navbar({ openNav }: Props) {
  return (
    <div className="w-[100%] bg-white">
      <div className="flex w-[80%] mx-auto items-center justify-between h-[12vh]">
        <div className="relative w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain cursor-pointer">
          <img src="logo.png" alt="logo"  />
        </div>
        <div className="flex   space-x-12 items-center ">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Hotel
          </a>
          <a href="#" className="nav-link">
            tour
          </a>
          <a href="#" className="nav-link">
            contact
          </a>
          <a href="#" className="nav-link">
            reviews
          </a>
          <a
            href="#"
            className="relative hidden  lg:inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56 "></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-700"></span>

            <span className="relative"> Book now</span>
          </a>
          <Bars3Icon
            onClick={openNav}
            className="w-[2rem] lg:hidden h-[2rem] text-blue-800 font-bold cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
