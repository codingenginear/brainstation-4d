import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
