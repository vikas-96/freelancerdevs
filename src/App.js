import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "./Component/Root";

export const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Root />
    </Router>
  );
}

export default App;
