import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../../actions/productAction";
import { useRouter } from "next/router";
import StButton from "../../accessibilties/StButtons";

export default function ProductScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);
  const [visibleOptions, setVisibleOptions] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(detailsProduct(id.trim()));
    }
  }, [dispatch, id]);

  const addToCartHandler = () => {
    router.push(`/cart/${id}?qty=${qty}`, {
      state: { id: id, qty: qty },
    });
  };

  const handleChange = (e) => {
    setQty(e.target.value);
  };

  useEffect(() => {
    let newAr = [];
    for (let i = 1; i <= product?.countInStock; i++) {
      newAr.push(i);
    }
    setVisibleOptions(newAr);
  }, [product?.countInStock]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <div className="products-screen-layout">
          <Link href="/">Bact to Result</Link>
          <div className="product-screen-row">
            <div className="product-images-container">
              <img
                className="product-large-image"
                src={product?.productCoverImage}
                alt={product?.productName}
              />
              <div className="allImagesContainer">
                {product?.productImages?.map((i) => {
                  return (
                    <img key={i} src={i} alt={i} className="smallImages" />
                  );
                })}
              </div>
            </div>
            <div className="product-options">
              <ul className="product-information">
                <li>{product?.productName}</li>
                <li>
                  <span>Price : </span>${product?.productPrice}
                </li>
                <li>
                  <span>Description : </span>
                  {product?.productDescription}
                </li>
                <li>
                  <span>Brand of product : </span>
                  {product?.productBrand}
                </li>
                <li>
                  <span>Seller : </span>
                  {product?.productProvidingCompany}
                </li>
                <li>
                  <span>Seller Registration : </span>
                  {product?.providingCompanyRegistration}
                </li>
                <li>
                  <span>Country Origin : </span>
                  {product?.countryOrigin}
                </li>
                <li>
                  <span>Who can wear : </span>
                  {product?.gender}
                </li>
                <li>
                  <span>Type of product : </span>
                  {product?.productType}
                </li>
              </ul>
              <div className="product-buy-container">
                <div className="buy-information">
                  <h3>
                    <span>Price : </span>${product?.productPrice}
                  </h3>
                  <h5>
                    <span>Status : </span>
                    {product?.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </h5>
                  {product?.countInStock > 0 && (
                    <>
                      <h5 className="qty-container">
                        <span>Qty : </span>
                        <div
                          id="customDropdown"
                          style={{ overflowY: "auto", maxHeight: "200px" }}
                        >
                          <select value={qty} onChange={handleChange}>
                            {visibleOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </h5>
                      <StButton
                        onClick={addToCartHandler}
                        name={"Add to Cart"}
                        style={{ marginTop: "25px" }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
