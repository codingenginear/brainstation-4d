import React, { Fragment, useState } from "react";
import Product from "../../components/Product/Product";
import "./Home.scss";
import StickyAddToCart from "../../components/StickyAddToCart/StickyAddToCart";

function Home() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleShowCalculator = () => {
    showCalculator ? setShowCalculator(false) : setShowCalculator(true);
  };

  return (
    <Fragment>
      <Product />

      <StickyAddToCart
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
      />
    </Fragment>
  );
}

export default Home;
