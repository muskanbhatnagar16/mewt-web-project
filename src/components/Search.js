import React from "react";

function Search() {
  return (
    <div className="bg-gray-50 h-70 inline-block absolute">
      <form className="flex flex-col p-2">
        <input className="rounded-lg" type="text" />
        <input type="text" />
      </form>
    </div>
  );
}

export default Search;
