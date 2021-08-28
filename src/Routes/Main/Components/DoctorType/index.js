import React from "react";

import gynaeImg from "Assets/gy.jpg";
import dietImg from "Assets/diet.jpg";
import physioImg from "Assets/physio.jpg";
import dentistImg from "Assets/dentist.jpg";
import { LargeInfoCard } from "Components/Molecules";

const doctorTypes = [
  {
    type: "Dentist",
    img: dentistImg,
    description: "Teething troubles? Schedule a dental checkup",
  },
  {
    type: "Gynecologist/Obstetrician",
    img: gynaeImg,
    description:
      "Explore for women's health, pregnancy and infertility treatments",
  },
  {
    type: "Dietician/Nutrition",
    img: dietImg,
    description:
      "Get guidance on eating right, weight management and sports nutrition",
  },
  {
    type: "Physiotherapist",
    img: physioImg,
    description: "Pulled a muscle? Get it treated by a trained physiotherapist",
  },
];

const DoctorType = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8 ">
        Book an appointment for an in-clinic consultation
      </h2>
      <h4 className="-mt-6 mb-6">
        Find experienced doctors across all specialties
      </h4>
      <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3 ">
        {doctorTypes.map(({ img, type, description }) => (
          <LargeInfoCard
            key={type}
            img={img}
            type={type}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorType;
