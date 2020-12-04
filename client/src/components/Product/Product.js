import React from "react";
import diaperImage from "../../assets/images/pampers.svg";
import backArrow from "../../assets/icons/backarrow.svg";
import frontArrow from "../../assets/icons/frontarrow.svg";
import reviewsIcon from "../../assets/icons/star.svg";
import "./Product.scss";
import infoIcon from "../../assets/icons/freepickup.svg";
import greenCheckIcon from "../../assets/icons/greencheck.svg";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import AddToCart from "../AddToCart/AddToCart";
import StickyAddToCart from "../StickyAddToCart/StickyAddToCart";

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
        <p className='product-description__pricing'>$32.74</p>
        <p className='product-description__pricing-each'>
          <span className='product-description__pricing-each-text'>
            31¢/each
          </span>
          <span className='product-description__pricing-each-icon'>
            <img
              src={infoIcon}
              alt='infoIcon'
              className='product-description__pricing-each-image'
            />
          </span>
        </p>
        <p className='product-description__store-availability'>
          <span className='product-description__store-availability-icon'>
            <img
              src={greenCheckIcon}
              alt='greenCheckIcon'
              className='product-description__store-availability-image'
            />
          </span>
          <span className='product-description__store-availability-text'>
            Available at nearby stores
          </span>
        </p>
      </div>

      <AdditionalInformation />
      <AddToCart />
      <StickyAddToCart />
    </div>
  );
}

export default Product;
