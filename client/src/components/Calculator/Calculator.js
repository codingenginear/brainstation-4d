import React from "react";
import "./Calculator.scss";
import homeIcon from "../../assets/icons/homeIcon.svg";

function Calculator({ handleShowCalculator }) {
  return (
    <div className='calculator'>
      <span
        className='calculator__home-indicator'
        onClick={handleShowCalculator}>
        <img src={homeIcon} alt='homeIcon' />
      </span>
      <p className='calculator__budget-text'>Budget Calculator</p>
      <p className='calculator__budget-question'>
        Would you like to set a budget for your cart?
      </p>
      <form className='calculator-budget'>
        <input
          type='range'
          name='budget'
          className='calculator-budget__slider'
        />
        <p className='calculator-budget__text'>
          <span className='calculator-budget__amount'>$5</span>
          <span className='calculator-budget__amount'>$200</span>
        </p>
        <p className='calculator-budget__limit'>
          <input
            type='checkbox'
            name='limit'
            className='calculator-budget__checkbox'
          />{" "}
          No Limit
        </p>
        <button className='calculator-budget__button'>Submit</button>
      </form>
    </div>
  );
}

export default Calculator;
