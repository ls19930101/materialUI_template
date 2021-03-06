import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect } from "react";

import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  blackList: {
    backgroundColor: theme.palette.common.black,
    height: "100%",
    width: 200,
  },
}));

function NavigationDrawer(props) {
  const { anchor, open, onClose, menuItems, selectedItem } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    window.onresize = () => {
      if (matches && open) {
        onClose();
      }
    };
  }, [open, onClose, matches]);

  return (
    <Drawer open={open} anchor={anchor} onClose={onClose}>
      <Toolbar onClose={onClose}>
        <ListItem
          disableGutters
          style={{
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
          }}
        >
          <ListItemIcon style={{ minWidth: "unset" }}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map((i) => {
          if (i.link) {
            return (
              <Link key={i.name} to={i.link} onClick={onClose}>
                <ListItem selected={selectedItem === i.name}>
                  <ListItemIcon>{i.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className="text-white">{i.name}</Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          }
          return (
            <ListItem key={i.name} onClick={i.onClick}>
              <ListItemIcon>{i.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography className="text-white">{i.name}</Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;
