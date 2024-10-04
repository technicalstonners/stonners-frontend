"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import homeData from "@/data/home";

const OfferSwiper = () => {
  const { swiperData } = homeData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = swiperData?.length;

  const updateSlider = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % totalSlides);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-vh-70 d-flex-center swiper-container">
      <div className="slides d-flex-center">
        {swiperData.map((src, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % totalSlides;
          const isPrev =
            index === (currentIndex - 1 + totalSlides) % totalSlides;

          return (
            <div
              key={index}
              className={`slide d-flex-center ${
                isCurrent ? "current" : isNext ? "next" : isPrev ? "prev" : ""
              }`}
            >
              <Image src={src} alt={src} fill />
            </div>
          );
        })}
      </div>
      <div className="dots d-flex-center">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => updateSlider(index)}
          >
            <span className="current-dot d-flex-center" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default OfferSwiper;
