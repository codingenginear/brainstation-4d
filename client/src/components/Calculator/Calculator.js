import React from "react";
import "./Calculator.scss";
import homeIcon from "../../assets/icons/homeIcon.svg";

function Calculator({ handleShowCalculator, chosenAmount, handleChosen }) {
  return (
    <div className='calculator-overlay'>
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
            min='5'
            max='200'
            value={chosenAmount}
            onChange={(e) => handleChosen(e.target.value)}
          />
          <p className='calculator-budget__text'>
            <span className='calculator-budget__amount'>$5</span>
            <span
              className='calculator-budget__amount'
              style={{
                paddingLeft: `${Number(chosenAmount) + 20}px`,
                marginRight: "auto",
              }}>
              {chosenAmount !== 5 && "$" + chosenAmount}
            </span>
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
    </div>
  );
}

export default Calculator;
