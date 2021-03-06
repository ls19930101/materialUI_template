import { Route, Switch } from "react-router-dom";

import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import PropsRoute from "@/shared/components/PropsRoute";
import React from "react";

function Routing(props) {
  const { setSelectedMenu } = props;
  return (
    <Switch>
      <PropsRoute
        path="/blog"
        component={Blog}
        setSelectedMenu={setSelectedMenu}
        title="Blog"
      />
      <PropsRoute
        path="/"
        component={Home}
        setSelectedMenu={setSelectedMenu}
        title="Home"
      />
    </Switch>
  );
}

export default Routing;
