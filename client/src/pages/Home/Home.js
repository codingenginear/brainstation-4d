import React, { Fragment } from "react";
import Product from "../../components/Product/Product";
import "./Home.scss";
import StickyAddToCart from "../../components/StickyAddToCart/StickyAddToCart";
import Calculator from "../../components/Calculator/Calculator";

function Home({ handleShowCalculator, showCalculator }) {
  return (
    <Fragment>
      <Product />

      <StickyAddToCart
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
      />

      {showCalculator && (
        <Calculator handleShowCalculator={handleShowCalculator} />
      )}
    </Fragment>
  );
}

export default Home;
