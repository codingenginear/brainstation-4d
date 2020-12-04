import React from "react";
import diaperImage from "../../assets/images/pampers.svg";
import backArrow from "../../assets/icons/backarrow.svg";
import frontArrow from "../../assets/icons/frontarrow.svg";
import reviewsIcon from "../../assets/icons/star.svg";
import "./Product.scss";

function Product() {
  return (
    <div className='product'>
      <div className='product-image'>
        <img
          src={backArrow}
          alt='leftArrow'
          className='product-image__left-arrow'
        />
        <div className='product-image__main'>
          <img
            src={diaperImage}
            alt='diaperImage'
            className='product-image__main-image'
          />
        </div>
        <img
          src={frontArrow}
          alt='rightArrow'
          className='product-image__right-arrow'
        />
      </div>
      <div className='product-description'>
        <p className='product-description__title'>
          Pampers Swaddlers Diapers - Super Econo Pack
        </p>
        <p className='product-description__external'>
          <a
            href='https://www.walmart.ca/en/baby/diapers-potty-training/diapers/N-2449+1102585'
            className='product-description__link'>
            Pampers
          </a>
        </p>
        <p className='product-description__sizes-summary'>
          Sizes 1-6, 174-84 Count
        </p>
        <p className='product-description__reviews'>
          <span className='product-description__reviews-icons'>
            <img
              src={reviewsIcon}
              alt='reviewsIcon'
              className='product-description__reviews-icons-images'
            />
          </span>
          <span className='product-description__reviews-number'>(7617)</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
