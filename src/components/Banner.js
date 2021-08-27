import React from "react";
import hospital from "../assets/hospital.jpg";
import Search from "./Search";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] l:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <img src={hospital} className="container  object-cover h-80 " />

      <Search />
    </div>
  );
}

export default Banner;
