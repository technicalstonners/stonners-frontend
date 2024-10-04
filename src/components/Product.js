import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { img7 } from "../../data";

export default function Product(props) {
  const { product, currentSlide, totalSlides } = props;

  const [curr, setCurr] = useState(currentSlide);

  useEffect(() => {
    setCurr(currentSlide);
  }, [currentSlide]);

  return (
    <div >
      <Link
        key={product?.productId}
        href={{ pathname: `/product/${product?.productId}`, state: { product } }}
        className="card"
      >
        <img className="medium" src={product?.productCoverImage} alt={product?.productCoverImage} />
        <div className="card-body">
          <h2>{product?.productName}</h2>
          <div className="price">${product?.productPrice}</div>
        </div>
      </Link>
    </div>
  );
}
