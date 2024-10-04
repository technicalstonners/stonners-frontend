import React from "react";
import StButton from "@/accessibilties/StButtons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-vh-70 exclusive">
      <div className="d-flex-between bar-container">
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
        <div className="styled-rect" />
      </div>
      <div className="exclusive-heading">
        <div className="exclusive-box">
          <p className="grab-text">Stonners Exclusives</p>
          <p>Grab Trendy Products</p>
          <StButton
            name={"Browse All Products"}
            variant={"orange"}
            icon={"/assets/icons/arrowRight.svg"}
            style={{ marginTop: "20px" }}
          />
        </div>
      </div>
      <div className="min-vh-70 d-flex-center brands-hero">
        <div className="poster-girl">
          <div className="poster-bg" />
          <Image
            src="/assets/images/posterGirl.png"
            width={235}
            height={500}
            alt="Picture of the author"
            className="poster-image"
          />
        </div>
        <div className="poster-brands">
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
          <h1>STONNERS</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
