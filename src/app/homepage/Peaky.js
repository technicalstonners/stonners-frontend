import StButton from "@/accessibilties/StButtons";
import homeData from "@/data/home";
import Image from "next/image";
import React from "react";

const Peaky = () => {
  const { peakyData } = homeData;
  return (
    <section className="min-vh-70 d-flex-center">
      <div className="peaky-content d-flex-center">
        <Image src={peakyData} alt="peaky" height={570} width={1067} className="summer-banner" />
        <div className="col-start">
          <h1 className="peaky-heading">Peaky Blinders</h1>
          <p className="peaky-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem.
          </p>
          <div className="d-flex-between size-container">
            <p>Size: </p>
            <p className="size">M</p>
          </div>
          <p className="minimum">Minimum 40% Off</p>
          <p className="price">$100.00</p>
          <StButton name={"Buy Now"} className="stButton-dark" />
        </div>
      </div>
    </section>
  );
};

export default Peaky;
