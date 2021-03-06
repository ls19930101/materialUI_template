import theme from "./theme";
import { withStyles } from "@material-ui/core";

const GlobalStyles = withStyles({
  "@global": {
    // ".MuiButton-root": {
    //   fontSize: "1rem",
    // },
    ".text-white": {
      color: theme.palette.common.white,
    },
    ".container-fluid": {
      width: "100%",
      padding: theme.spacing(0, 2),
      margin: "auto",
      maxWidth: 1400,
    },
    ".lg-p-top": {
      paddingTop: theme.spacing(20),
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(18)}px !important`,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(16)}px !important`,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(12)}px !important`,
      },
    },
    ".lg-mg-bottom": {
      marginBottom: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(18)}px !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(16)}px !important`,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(14)}px !important`,
      },
    },
  },
})(() => null);

export default GlobalStyles;
