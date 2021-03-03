import React from "react";
import { BrowserRouter, Route, Switch,Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetStartedPage from './pages/GetStartedPage'
import DesignHome from './pages/DesignHome';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/get-started" exact component={GetStartedPage} />
        <Route path="/get-started-design-your-own-home" exact component={DesignHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
