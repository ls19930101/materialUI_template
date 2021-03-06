import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

const LoggedInComponent = lazy(() => import("@/Logged_in"));

const LoggedOutComponent = lazy(() => import("@/Logged_out"));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Suspense fallback={<div>加载中,loading....</div>}>
          <GlobalStyles />

          <Switch>
            <Route path="/t">
              <LoggedInComponent />
            </Route>
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
