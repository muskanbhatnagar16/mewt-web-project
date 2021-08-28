import React, { useState } from "react";

const locationsData = [
  { value: "Delhi", label: "Delhi" },
  { value: "Banglore", label: "Banglore" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Nasik", label: "Nasik" },
];

export const useData = () => {
  const [fetchingLocation, setFetching] = useState(false);
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    setFetching(true);
    Promise.resolve(true) //Api call can be implemented as well
      .then(() => {
        setFetching(false);
        setLocations(locationsData);
      })
      .catch(() => {
        setFetching(false);
        alert("Something went wrong");
      });
  };

  React.useEffect(() => {
    getLocations();
  }, []);

  return { fetchingLocation, locations };
};
