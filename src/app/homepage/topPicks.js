import homeData from "@/data/home";
import Image from "next/image";
import React from "react";

const TopPicks = () => {
  const { weeklyData } = homeData;
  const { weekly1, weekly2, weekly3, weekly4 } = weeklyData;
  return (
    <section className="min-vh-70 col-center">
      <div className="col-center">
        <h1>Top Weekly Picks</h1>
        <p className="category-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <div className="d-flex-center weekly-container">
          <Image
            className="weekly-image"
            src={weekly1}
            width={415}
            height={352}
            alt="weekly 1"
          />
          <Image
            className="weekly-image"
            src={weekly2}
            width={662}
            height={352}
            alt="weekly 2"
          />
          <Image
            className="weekly-image"
            src={weekly3}
            width={662}
            height={352}
            alt="weekly 3"
          />
          <Image
            className="weekly-image"
            src={weekly4}
            width={415}
            height={352}
            alt="weekly 4"
          />
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
