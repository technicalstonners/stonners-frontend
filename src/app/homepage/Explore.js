import React from "react";
import homeData from "@/data/home";
import Image from "next/image";
import StButton from "@/accessibilties/StButtons";

const Explore = () => {
  const { exploreData } = homeData;
  const {
    sittingman,
    group1,
    group2,
    sittingman2,
    calvin,
    prada,
    louis,
    chanel,
  } = exploreData;

  return (
    <section className="d-flex-center min-vh-70 w-100 padded">
      <div className="offer offer-grey col-between">
        <div className="streetwear-offer col-center">
          <div>Streetwear at 50% off</div>
          <div className="col-between explore-brand-image w-100">
            <Image
              src={chanel}
              alt={chanel}
              width={136}
              height={20}
              className="summer-banner individual-brand-image"
            />
            <Image
              src={calvin}
              alt={calvin}
              width={136}
              height={23}
              className="summer-banner individual-brand-image"
            />
          </div>
        </div>
        <Image
          src={sittingman}
          alt={sittingman}
          width={392}
          height={570}
          className="summer-banner sittingman"
        />
      </div>
      <div className="offer col-between explore-mid-section1">
        <Image src={group1} alt={group1} width={426} height={150} className='summer-banner' />
        <div className="col-center w-100">
          <h1 className="explore">EXPLORE</h1>
          <p className="brands">BRANDS</p>
          <p className="with-stonners">WITH STONNERS</p>
          <StButton
            name={"SHOP NOW"}
            className="stButton-dark"
            style={{ margin: "15px 0", padding: "20px 60px" }}
          />
        </div>
        <Image
          src={group2}
          alt={group2}
          width={426}
          height={150}
          className="summer-banner"
        />
      </div>
      <div className="offer offer-grey col-between">
        <div className="streetwear-offer col-center">
          <div>Streetwear at 50% off</div>
          <div className="col-between explore-brand-image w-100">
            <Image
              src={louis}
              alt={louis}
              width={136}
              height={20}
              className="summer-banner individual-brand-image"
            />
            <Image
              src={prada}
              alt={prada}
              width={136}
              height={23}
              className="summer-banner individual-brand-image"
            />
          </div>
        </div>
        <Image
          src={sittingman2}
          alt={sittingman2}
          width={249}
          height={568}
          className="summer-banner sittingman"
        />
      </div>
      <div className="offer col-between explore-mid-section2">
        <Image src={group1} alt={group1} width={426} height={150} className='summer-banner' />
        <div className="col-center w-100">
          <h1 className="explore">EXPLORE</h1>
          <p className="brands">BRANDS</p>
          <p className="with-stonners">WITH STONNERS</p>
          <StButton
            name={"SHOP NOW"}
            className="stButton-dark"
            style={{ margin: "15px 0", padding: "20px 60px" }}
          />
        </div>
        <Image
          src={group2}
          alt={group2}
          width={426}
          height={150}
          className="summer-banner"
        />
      </div>
    </section>
  );
};

export default Explore;
