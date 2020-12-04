import React, { Fragment } from "react";
import Product from "../../components/Product/Product";
import "./Home.scss";
import StickyAddToCart from "../../components/StickyAddToCart/StickyAddToCart";
import Calculator from "../../components/Calculator/Calculator";
import Cart from "../../components/Cart/Cart";

function Home({
  handleShowCalculator,
  showCalculator,
  handleShowCart,
  showCart,
}) {
  return (
    <Fragment>
      <Product />

      <StickyAddToCart
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
        handleShowCart={handleShowCart}
      />

      {showCalculator && (
        <Calculator handleShowCalculator={handleShowCalculator} />
      )}

      {showCart && <Cart handleShowCart={handleShowCart} />}
    </Fragment>
  );
}

export default Home;
