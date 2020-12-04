import React from "react";
import burgerIcon from "../../assets/icons/burger.svg";
import walmartLogo from "../../assets/images/walmartlogo.svg";
import calculatorIcon from "../../assets/icons/budget.svg";
import cartIcon from "../../assets/icons/cart.svg";
import "./Header.scss";
import searchIcon from "../../assets/icons/search.svg";
import backIcon from "../../assets/icons/backarrow.svg";

function Header() {
  return (
    <header className='header'>
      <div className='header-top'>
        <nav className='header-top__menu'>
          <img
            src={burgerIcon}
            alt='burgerIcon'
            className='header-top__burger-menu'
          />
        </nav>
        <div className='header-top__logo'>
          <img
            src={walmartLogo}
            alt='walmartLogo'
            className='header-top__logo-image'
          />
        </div>
        <div className='header-top__actions'>
          <img
            src={calculatorIcon}
            alt='calculatorIcon'
            className='header-top__calculator-icon'
          />
          <img
            src={cartIcon}
            alt='cartIcon'
            className='header-top__cart-icon'
          />
        </div>
      </div>
      <form className='header-search'>
        <input
          type='text'
          placeholder='What are you looking for?'
          className='header-search__input'
        />
        <button className='header-search__button'>
          <img src={searchIcon} alt='search' />
        </button>
      </form>
      <p className='header-breadcrumb'>
        <span className='header-breadcrumb__go-back'>
          <img
            src={backIcon}
            alt='backIcon'
            className='header-breadcrumb__go-back-icon'
          />
        </span>{" "}
        <a
          className='header-breadcrumb__text'
          href='https://www.walmart.ca/en/baby/diapers-potty-training/diapers/disposable-diapers/N-4171'>
          Back to Disposable Diapers
        </a>
      </p>
    </header>
  );
}

export default Header;
