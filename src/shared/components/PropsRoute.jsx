import React from "react";
import { Route } from "react-router-dom";

export default function PropsRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => <Component {...routeProps} {...rest} />}
    />
  );
}
