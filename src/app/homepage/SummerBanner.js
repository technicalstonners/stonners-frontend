import homeData from "@/data/home";
import Image from "next/image";
import React from "react";


const SummerBanner = () => {
    const { summerBannerData } = homeData;

    return (
      <section className="padded col-center">
        <Image className="summer-banner" src={summerBannerData} alt="summer banner" width={1400} height={522} />
      </section>
    );
}

export default SummerBanner;