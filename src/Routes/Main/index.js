import * as React from "react";

import { Banner, Concerns, DoctorType } from "Routes/Main/Components";

import { NavBar, Offer, Footer } from "Components/Organism";

const Main = () => {
  return (
    <>
      <Offer />
      <NavBar />
      <Banner />
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <Concerns />
        <DoctorType />
      </div>
      <Footer />
    </>
  );
};

export default Main;
