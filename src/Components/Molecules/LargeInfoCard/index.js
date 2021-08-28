import React from "react";

const LargeInfoCard = ({ img, type, description }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform  transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <img className="rounded-xl object-contain " src={img} />
        <h2 className="text-2xl mt-4">{type}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default LargeInfoCard;
