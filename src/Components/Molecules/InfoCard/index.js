import React from "react";

function Category({ img, description, buttonLabel }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-20 w-20 ">
        <img src={img} className="rounded-lg" />
      </div>
      <div>
        <h2>{description}</h2>
        <button className="text-blue-500">{buttonLabel}</button>
      </div>
    </div>
  );
}

export default Category;
