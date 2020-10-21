import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "./Component/Root";

export const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory} basename={process.env.PUBLIC_URL}>
      <Root />
    </Router>
  );
}

export default App;
