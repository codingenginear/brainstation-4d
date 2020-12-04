import React from "react";
import "./AddToCart.scss";
import subtractIcon from "../../assets/icons/subtract.svg";
import addIcon from "../../assets/icons/add.svg";

function AddToCart() {
  return (
    <div className='add-to-cart'>
      <div className='add-to-cart__size'>
        <span className='add-to-cart__size-section'>Size: Size 5</span>
        <span className='add-to-cart__size-text'>See more</span>
      </div>
      <div className='add-to-cart__sizes'>
        <button className='add-to-cart__sizes-button'>Size 1</button>
        <button className='add-to-cart__sizes-button'>Size 2</button>
        <button className='add-to-cart__sizes-button'>Size 3</button>
        <button className='add-to-cart__sizes-button'>Size 4</button>
        <button className='add-to-cart__sizes-button'>Size 5</button>
        <button className='add-to-cart__sizes-button'>Size 6</button>
      </div>
      <div className='add-to-cart__quantity'>
        <button className='add-to-cart__quantity-subtract'>
          <img
            src={subtractIcon}
            alt='subtractIcon'
            className='add-to-cart__quantity-subtract-image'
          />
        </button>
        <span className='add-to-cart__quantity-amount'>1</span>
        <button className='add-to-cart__quantity-add'>
          <img
            src={addIcon}
            alt='addIcon'
            className='add-to-cart__quantity-add-image'
          />
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
