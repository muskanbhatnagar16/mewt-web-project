import React, { useState } from "react";

import logo from "Assets/logo.png";
import Login from "Components/Login";
import { SideBar } from "Components/Organism";

function Header() {
  const [isSideBarVisible, setSideBarVisibility] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisibility((prevState) => !prevState);
  };

  return (
    <>
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

        <div className="col-span-2  ">
          <button
            onClick={toggleSideBar}
            className=" rounded-full p-3 mt-4 ml-10  shadow-md font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150 border-blue-900 border-solid"
          >
            Login/SignUp
          </button>
        </div>
      </header>
      <SideBar
        hideSideBar={() => setSideBarVisibility(false)}
        visible={isSideBarVisible}
        content={<Login onHide={() => setSideBarVisibility(false)} />}
        width="350px"
      />
    </>
  );
}

export default Header;
