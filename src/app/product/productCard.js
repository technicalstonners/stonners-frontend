import Image from "next/image";
import React from "react";

const ProductCard = ({ productCard }) => {
  const { image, title, brand, rating, offer, price } = productCard;

  return (
    <div className="col-start product-card">
      <Image src={image} width={336} height={244} alt={title} className="product-card-image" />
      <div className="d-flex-between w-100 product-title">
        <p>{title}</p>
        <p>
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              style={{ margin: "0 1px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6646 7.55862L9.5 0.430908L7.33536 7.55862H0L5.93479 12.1729L3.73214 19.4309L9.5 14.9455L15.2679 19.4309L13.0652 12.1729L19 7.55862H11.6646Z"
                fill="#FCA120"
              />
            </svg>
          ))}
        </p>
      </div>
      <p className="small-brand">{brand}</p>
      <p className="brand-offer">Minimum {offer}</p>
      <div className="d-flex-between w-100">
        <p className="product-title">
          <svg fill="#000000" width="20" height="20" viewBox="-96 0 512 512">
            <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z" />
          </svg>
          {price}
        </p>
        <button style={{ all: "unset", fontSize: "14px", fontWeight: "700" }}>+ Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
