import "./App.css";
import "fontsource-roboto";
import { Switch, Route } from "react-router-dom";
import { CalculatorContainer } from "./calculator-container";
import NavContainer from "./nav";

function App() {
  return (
    <>
      <NavContainer />
      <div className="center">
        <Switch>
          <Route path="/">
            <CalculatorContainer />
          </Route>
          <Route exact path="/settings">
            hhhh
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
