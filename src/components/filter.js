import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productAction";

const Filter = () => {
    
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [productsCategory, setProductsCategory] = useState([]);
  const [productsBrands, setProductsBrands] = useState([]);
  const [productsReviews, setProductsReviews] = useState([]);
  const [productsRatings, setProductsRatings] = useState([]);
  const [prices, setPrices] = useState([]);
  const [minPrices, setMinPrices] = useState();
  const [maxPrices, setMaxPrices] = useState();
  const [minRatings, setMinRatings] = useState();
  const [maxRatings, setMaxRatings] = useState();
  const [minReviews, setMinReviews] = useState();
  const [maxReviews, setMaxReviews] = useState();
  const [sliderPrice, setSliderPrice] = useState(
    minPrices !== undefined ? minPrices : 0
  );
  const [sliderRating, setSliderRating] = useState(
    minRatings !== undefined ? minRatings : 0
  );
  const [sliderReview, setSliderReview] = useState(
    minReviews !== undefined ? minReviews : 0
  );
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleSliderRatings = (event) => {
    setSliderRating(event.target.value);
  };

  const handleSliderReviews = (event) => {
    setSliderReview(event.target.value);
  };

  const handleCategory = (event) => {
    const categoryIndex = selectedCategory.indexOf(event);
    if (categoryIndex === -1) {
      setSelectedCategory((prevCategories) => [...prevCategories, event]);
    } else {
      const updatedCategories = [...selectedCategory];
      updatedCategories.splice(categoryIndex, 1);
      setSelectedCategory(updatedCategories);
    }
    setSelectedValue(event);
  };

  const handleBrands = (event) => {
    let brandsArray = [];
    brandsArray.push(event.target.value, ...selectedBrands);
    setSelectedBrands(brandsArray);
  };

  const handleSliderPrice = (event) => {
    setSliderPrice(event.target.value);
  };

  useEffect(() => {
    const uniqueBrands = new Set();
    const uniqueCategories = new Set();
    const uniqueReviews = new Set();
    const uniqueRatings = new Set();
    const uniquePrices = new Set(); 

    products?.forEach((product) => {
      uniqueBrands.add(product.brand);
      uniqueCategories.add(product.category);
      uniqueReviews.add(product.numReviews);
      uniqueRatings.add(product.rating);
      uniquePrices.add(product.price);
    });

    setProductsBrands(Array.from(uniqueBrands));
    setProductsCategory(Array.from(uniqueCategories));
    setProductsReviews(Array.from(uniqueReviews));
    setProductsRatings(Array.from(uniqueRatings));
    setPrices(Array.from(uniquePrices));
  }, [products]);

  useEffect(() => {
    if (prices.length > 0) {
      setMaxPrices(Math.max(...prices));
      setMinPrices(Math.min(...prices));
    }
  }, [prices]);

  useEffect(() => {
    if (productsRatings.length > 0) {
      setMaxRatings(Math.max(...productsRatings));
      setMinRatings(Math.min(...productsRatings));
    }
  }, [productsRatings]);

  useEffect(() => {
    if (productsReviews.length > 0) {
      setMaxReviews(Math.max(...productsReviews));
      setMinReviews(Math.min(...productsReviews));
    }
  }, [productsReviews]);
    return (
        
      <div className="filters-container">
      <div className="filter-tiles">
        <h4>Price</h4>
        <input
          type="range"
          min={minPrices}
          max={maxPrices}
          value={sliderPrice}
          onChange={handleSliderPrice}
          className="slider"
        />
        <div className="slider-values">
          <span>{minPrices}</span>
          <span>{sliderPrice}</span>
          <span>{maxPrices}</span>
        </div>
      </div>
      <div className="filter-tiles">
        <h4>Category</h4>
        {productsCategory?.length > 0 &&
          productsCategory.map((category, index) => (
            <label key={index} className="checkbox-label">
              <input
                type="checkbox"
                className={
                  selectedCategory.includes(category)
                    ? "checkbox checkbox-active"
                    : "checkbox"
                }
                onChange={() => handleCategory(category)}
                checked={selectedCategory.includes(category)}
                value={category}
              />
              {category}
            </label>
          ))}
      </div>

      <div className="filter-tiles">
        <h4>rating</h4>
        <input
          type="range"
          min={minRatings}
          max={maxRatings}
          value={sliderRating}
          onChange={handleSliderRatings}
          className="slider"
        />
        <div className="slider-values">
          <span>{minRatings}</span>
          <span>{sliderRating}</span>
          <span>{maxRatings}</span>
        </div>
      </div>
      <div className="filter-tiles">
        <h4>reviews</h4>
        <input
          type="range"
          min={minReviews}
          max={maxReviews}
          value={sliderReview}
          onChange={handleSliderReviews}
          className="slider"
        />
        <div className="slider-values">
          <span>{minReviews}</span>
          <span>{sliderReview}</span>
          <span>{maxReviews}</span>
        </div>
      </div>
      <div className="filter-tiles">
        <h4>brands</h4>
        {productsBrands?.length &&
          productsBrands.map((brands, index) => {
            return (
              <div key={index} className="checkbox" onChange={handleBrands}>
                {brands}
              </div>
            );
          })}
      </div>
    </div>
    );
}

export default Filter;
