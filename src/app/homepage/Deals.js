"use client";
import StButton from "@/accessibilties/StButtons";
import React, { useEffect, useState } from "react";
import homeData from "@/data/home";
import Image from "next/image";

const Deals = () => {
  const dealsData = homeData.dealsData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dealsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dealsData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="d-flex-center padded min-vh-70 deals-section ">
      <div className="col-start deal-container">
        <h1 className="deal-month">Deals Of The Month</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <StButton
          name={"Buy Now"}
          className="stButton-dark"
          style={{
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
            margin: "20px 0",
          }}
        />
        <h1 className="hurry-text">Hurry, Before It’s Too Late!</h1>
        <div className="d-flex-start">
          <div className="col-center timer-container">
            <p className="timer">02</p>
            <p className="under-timer">Days</p>
          </div>
          <div className="col-center timer-container">
            <p className="timer">06</p>
            <p className="under-timer">Hr</p>
          </div>
          <div className="col-center timer-container">
            <p className="timer">05</p>
            <p className="under-timer">Mins</p>
          </div>
          <div className="col-center timer-container">
            <p className="timer">30</p>
            <p className="under-timer">Sec</p>
          </div>
        </div>
      </div>
      <div className="deal-slider-wrapper">
        <div className="deal-slider d-flex-start">
          <div
            className="deal-slider-container"
            style={{
              transform: `translateX(-${currentIndex * 404}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {dealsData.map((src, index) => (
              <div
                key={index}
                className={`deal-slide ${
                  index === currentIndex ? "deal-active" : "deal-inactive"
                }`}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  height={582}
                  width={404}
                  className="deal-slider-image"
                />
              </div>
            ))}
          </div>
          <div className="deal-dots d-flex-between">
          {dealsData.map((_, index) => (
            <span
              key={index}
              className={`deal-dot ${index === currentIndex ? "deal-active" : ""}`}
              onClick={() => goToSlide(index)}
            >
            <span className="current-dot d-flex-center" />
            </span>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default Deals;
