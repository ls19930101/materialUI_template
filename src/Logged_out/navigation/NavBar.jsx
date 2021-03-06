import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Book, Home, HowToReg, LockOpen, Menu } from "@material-ui/icons";
import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import NavigationDrawer from "@/shared/components/NavigationDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none",
  },
  textBtn: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
}));
function NavBar(props) {
  const { selectedMenu } = props;
  const classes = useStyles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }, [setMobileDrawerOpen, mobileDrawerOpen]);

  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <Home className="text-white" />,
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <Book className="text-white" />,
    },
    {
      name: "Register",
      // onClick: openRegisterDialog,
      icon: <HowToReg className="text-white" />,
    },
    {
      name: "Login",
      // onClick: openLoginDialog,
      icon: <LockOpen className="text-white" />,
    },
  ];
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="h4"
            className={classes.brandText}
            display="inline"
            color="secondary"
          >
            Louis
          </Typography>
          <div>
            <Hidden mdUp>
              <IconButton onClick={toggleMobileDrawer}>
                <Menu color="secondary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((i) =>
                i.link ? (
                  <Link
                    key={i.name}
                    to={i.link}
                    className={classes.noDecoration}
                  >
                    <Button color="secondary" className={classes.textBtn}>
                      {i.name}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    color="secondary"
                    key={i.name}
                    className={classes.textBtn}
                  >
                    {i.name}
                  </Button>
                )
              )}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        anchor="right"
        open={mobileDrawerOpen}
        onClose={toggleMobileDrawer}
        menuItems={menuItems}
        selectedItem={selectedMenu}
      />
    </div>
  );
}

export default NavBar;
