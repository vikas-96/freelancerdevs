import React from "react";
import { Route } from "react-router-dom";
import FrontHeader from "./Front/Header";
import FrontFooter from "./Front/Footer";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
};

export const FrontLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <FrontHeader {...props} />
          <Component {...props} />
          <FrontFooter />
        </>
      )}
    />
  );
};
