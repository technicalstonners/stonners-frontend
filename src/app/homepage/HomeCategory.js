'use client'
import homeData from "@/data/home";
import React, { useState } from "react";
import ProductCard from "../product/productCard";

const HomeCategory = ({ category }) => {
  const { categoryData } = homeData;
  const {heading, description, subHeading, productCard } = categoryData[category]
  const [currentIndex] = useState(0);

  return (
    <section className="min-vh-70 padded col-center">
      <div className="col-center">
        <h1>{heading}</h1>
        <p className="category-subtitle">
          {description}
        </p>
        <div className="d-flex-center">
          <button className="category-slider-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                stroke="#000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h3 className="category-sub-heading">{subHeading}</h3>
          <button className="category-slider-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                stroke="#000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="d-flex-center">
          {productCard &&
            productCard.map((i, index) => (
              <ProductCard productCard={i} key={index} />
            ))}
        </div>
        <div className="d-flex-center">
          {productCard &&
            productCard.map((i, index) => (
              <ProductCard productCard={i} key={index} />
            ))}
        </div>
        <div className="dots d-flex-center">
        {[...Array(productCard.length)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          >
            <span className="current-dot d-flex-center" />
          </span>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HomeCategory;
