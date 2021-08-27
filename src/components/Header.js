import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg bg-white shadow-md grid grid-cols-12 h-20 sticky z-50">
      {/* Righ60 Logo */}
      <div className="col-span-2">
        <img className="object-contain h-20" src={logo} alt="practo" />
      </div>
      {/* Middle Nav */}

      <div className="col-span-8 flex justify-around ">
        <button className="cursor-pointer hover:opacity-20 ">
          <span className="block font-semibold  ">Doctors</span>
          <span className="block text-xs text-gray-400 hover:text-black ">
            Book an appointment
          </span>
        </button>
        <button className="cursor-pointer hover:opacity-20 ">
          <span className="block font-semibold">Consult</span>
          <span className="block text-xs text-gray-400 hover:text-black">
            Consult with top doctors
          </span>
        </button>
        <button className="cursor-pointer hover:opacity-20 ">
          <span className="block font-semibold">Pharmacy</span>
          <span className="block text-xs text-gray-400 hover:text-black">
            Medicines & health products
          </span>
        </button>
        <button className="cursor-pointer hover:opacity-20 ">
          <span className="block font-semibold">Diagnostics</span>
          <span className="block text-xs text-gray-400 hover:text-black">
            Book tests and checkups
          </span>
        </button>
      </div>

      {/* Right: Login */}

      <div className="col-span-2  ">
        <button className=" rounded-full p-3 mt-4 ml-10  shadow-md font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150 border-blue-900 border-solid">
          Login/SignUp
        </button>
      </div>
    </header>
  );
}

export default Header;
