import { Button, ThemeProvider, createMuiTheme } from "@material-ui/core";

import React from "react";

// 一次性使用的可复用的组件——主题覆盖
function ColoredButton(props) {
  const { children, color, ...rest } = props;

  const buttonTheme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={buttonTheme}>
      <Button color="primary" {...rest}>
        {children}
      </Button>
    </ThemeProvider>
  );
}

export default ColoredButton;
