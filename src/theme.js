import { createMuiTheme } from "@material-ui/core";

// colors
const primary = "#b3294e";
const secondary = "#4829B2";
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const background = "#f5f5f5";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    common: { black, darkBlack },
    // background: {
    //   default: "#fff",
    // },
  },
});

export default theme;
