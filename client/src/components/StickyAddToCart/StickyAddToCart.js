import React from "react";
import "./StickyAddToCard.scss";

function StickyAddToCart() {
  return (
    <div className='sticky-add-to-cart'>
      <div className='sticky-add-to-cart__container'>
        <button className='sticky-add-to-cart__add'>Add to Cart</button>
        <button className='sticky-add-to-cart__find'>Find In Store</button>
      </div>
    </div>
  );
}

export default StickyAddToCart;
