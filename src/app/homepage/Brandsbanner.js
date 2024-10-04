import homeData from "@/data/home";
import Image from "next/image";
import React from "react";

const BrandsBanner = () => {
  const { brandsbannerData } = homeData;

  return (
    <section>
      <Image src={brandsbannerData} alt="brands banner" width={1080} height={167} className='brands-banner' />
    </section>
  );
};

export default BrandsBanner;
