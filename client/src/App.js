import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleShowCalculator = () => {
    showCalculator ? setShowCalculator(false) : setShowCalculator(true);
  };

  return (
    <Router>
      <Header
        handleShowCalculator={handleShowCalculator}
        showCalculator={showCalculator}
      />
      <Switch>
        <Route
          path='/'
          render={() => {
            return (
              <Home
                handleShowCalculator={handleShowCalculator}
                showCalculator={showCalculator}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
