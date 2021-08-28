import React from "react";
import Select from "react-select";

import { Button } from "Components/Atoms";
import { useData } from "Routes/Main/Components/Banner/Components/Search/data";

const doctors = [
  { value: "Dr. Kushal Prakash", label: "Dr. Kushal Prakash" },
  { value: "Dr. Rishabh Jain", label: "Dr. Rishabh Jain" },
  { value: "Dr. Ajit kumar", label: "Dr. Ajit kumar" },
  { value: "Dr. Muskan Bhatnagar", label: "Dr. Muskan Bhatnagar" },
];

const Search = () => {
  const { fetchingLocation, locations } = useData();

  return (
    <div className="p-6 flex flex-row bg-white w-9/12 self-center justify-between rounded-md">
      <div className="w-1/3 mr-5">
        <Select
          isLoading={fetchingLocation}
          options={locations}
          placeholder="Location"
        />
      </div>
      <div className="w-1/3 mr-2">
        <Select options={doctors} placeholder="Search Doctors, Clinic etc.." />
      </div>
      <div className="w-1/3 mr-2">
        <Button>Book Consultation</Button>
      </div>
    </div>
  );
};

export default Search;
