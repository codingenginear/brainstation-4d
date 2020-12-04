import React, { Fragment } from "react";
import Product from "../../components/Product/Product";
import "./Home.scss";
import StickyAddToCart from "../../components/StickyAddToCart/StickyAddToCart";

function Home({ handleShowCalculator, showCalculator, handleShowCart }) {
  return (
    <Fragment>
      <Product />

      <StickyAddToCart
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
        handleShowCart={handleShowCart}
      />
    </Fragment>
  );
}

export default Home;
