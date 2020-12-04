import React from "react";
import "./Cart.scss";
import closeModal from "../../assets/icons/closemodal.svg";
import cartCheck from "../../assets/icons/cartcheck.svg";
import pampersmini from "../../assets/images/pampersmini.svg";
import stars from "../../assets/icons/star.svg";
import question from "../../assets/icons/question.svg";
import walmartMini from "../../assets/images/walmartlogomini.svg";
import add from "../../assets/icons/add.svg";
import subtract from "../../assets/icons/subtract.svg";
import { Link } from "react-router-dom";

const Cart = ({ handleShowCart }) => {
  const handleClick = () => {
    handleShowCart();
  };
  return (
    <div className='cart-overlay'>
      <div className='cart-main'>
        <div className='cart'>
          <img
            className='cart__close'
            src={closeModal}
            alt='Close'
            onClick={handleShowCart}></img>

          <div className='cart__header'>
            <div className='cart__checkmark'>
              <img
                className='cart__checkmark-img'
                src={cartCheck}
                alt='Cart Checkmark'></img>
            </div>
            <div className='cart__header-para-div'>
              <p className='cart__header-para'>
                You have successfully<br></br> updated your cart.
              </p>
            </div>
          </div>

          <div className='cart__main'>
            <div className='cart__main-image-div'>
              <img className='cart__main-image' src={pampersmini} alt='' />
            </div>
            <div className='cart__main-right'>
              <p className='cart__main-right-header'>
                Pampers Swaddlers<br></br>Diapers - Super Econo<br></br>Pack
              </p>
              <p className='cart__size'>
                Size: <span className='cart__size-bold'>Size 5</span>
              </p>
              <div className='cart__stars'>
                <img
                  className='cart__stars-img'
                  src={stars}
                  alt='Rating Stars'
                />
                <p className='cart__num-of-rates'>(7617)</p>
              </div>
              <p className='cart__price'>$32.74</p>
              <div className='cart__price-per-div'>
                31¢/each{" "}
                <span>
                  <img
                    className='cart__price-per-question'
                    src={question}
                    alt='question'></img>
                </span>
              </div>

              <div className='cart__sold-by-div'>
                <p className='cart__sold-by-para'>Sold & shipped by</p>
                <img
                  className='cart__walmart-logo-mini'
                  src={walmartMini}
                  alt='walmartMini'></img>
              </div>

              <div className='cart__quantity-div'>
                <p className='cart__quantity'>Quantity:</p>
                <div className='cart__quantity-amount-div'>
                  <img className='cart__minus-button' src={subtract} alt='' />
                  <p className='cart__quantity-amount'>1</p>
                  <img className='cart__plus-button' src={add} alt=''></img>
                </div>
              </div>
            </div>
          </div>

          <div className='cart__bottom-div'>
            <p className='cart__subtotal'>Subtotal $32.74</p>
            <p className='cart__total-items'>1 Item</p>
            <div className='cart__button-div'>
              <Link
                to='/dashboard'
                className='cart__checkout'
                onClick={handleClick}>
                Checkout
              </Link>
              <button className='cart__continue-shopping'>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
