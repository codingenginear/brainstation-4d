import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calculator from "./components/Calculator/Calculator";
import Cart from "./components/Cart/Cart";

function App(props) {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [chosenAmount, setChosenAmount] = useState(5);
  const handleShowCalculator = () => {
    showCalculator ? setShowCalculator(false) : setShowCalculator(true);
  };

  const handleShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const handleChosen = (value) => {
    setChosenAmount(value);
  };

  return (
    <Router>
      <Header
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
        handleShowCart={handleShowCart}
        showCart={showCart}
      />
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return (
              <Home
                handleShowCalculator={handleShowCalculator}
                showCalculator={showCalculator}
                handleShowCart={handleShowCart}
                showCart={showCart}
                chosenAmount={chosenAmount}
                handleChosen={handleChosen}
              />
            );
          }}
        />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>

      {showCalculator && (
        <Calculator
          handleShowCalculator={handleShowCalculator}
          chosenAmount={chosenAmount}
          handleChosen={handleChosen}
        />
      )}

      {showCart && <Cart handleShowCart={handleShowCart} />}
    </Router>
  );
}

export default App;
