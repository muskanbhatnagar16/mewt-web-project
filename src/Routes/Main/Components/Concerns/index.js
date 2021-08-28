import React from "react";

import babyImg from "Assets/baby.svg";
import acneImg from "Assets/acne.webp";
import coughImg from "Assets/cough.webp";
import coupleImg from "Assets/couple.svg";
import periodImg from "Assets/period.webp";
import { InfoCard } from "Components/Molecules";
import mentalImg from "Assets/mentalWellness.webp";

const data = [
  { img: periodImg, description: "Period doubts or Pregnancy" },
  { img: acneImg, description: "Acne, pimples or skin issues" },
  { img: coupleImg, description: "Performance issues in bed" },
  { img: mentalImg, description: "Depression or anxiety" },
  { img: babyImg, description: "Child not feeling well" },
  { img: coughImg, description: "Cold, cough or fever" },
];

const Concerns = () => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">
        Consult top doctors online for any health concern
      </h2>
      <h4 className="-mt-4 -mr-2">
        Private online consultations with verified doctors in all specialists
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-4">
        {data.map(({ img, description }) => (
          <InfoCard
            img={img}
            description={description}
            buttonLabel="Consult Now"
          />
        ))}
      </div>
    </section>
  );
};

export default Concerns;
