import React from "react";
import "./StickyAddToCard.scss";
import homeIcon from "../../assets/icons/homeIcon.svg";

function StickyAddToCart({ handleShowCalculator, handleShowCart }) {
  return (
    <div className='sticky-add-to-cart'>
      <div className='sticky-add-to-cart__container'>
        <button className='sticky-add-to-cart__add' onClick={handleShowCart}>
          Add to Cart
        </button>
        <button className='sticky-add-to-cart__find'>Find In Store</button>
      </div>

      <span className='sticky-home-icon'>
        <img
          src={homeIcon}
          alt='homeIcon'
          onClick={handleShowCalculator}
          className='sticky-home-icon__image'
        />
      </span>
    </div>
  );
}

export default StickyAddToCart;
