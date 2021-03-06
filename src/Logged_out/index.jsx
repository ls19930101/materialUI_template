import "aos/dist/aos.css";

import React, { useState } from "react";

import AOS from "aos/dist/aos.js";
import NavBar from "./navigation/NavBar";
import Routing from "./Routing";
import { makeStyles } from "@material-ui/core";

AOS.init({ once: true });

const useStyle = makeStyles((theme) => ({
  rootContainer: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
}));

function Logged_out() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const classes = useStyle();
  return (
    <div className={classes.rootContainer}>
      <NavBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Routing setSelectedMenu={setSelectedMenu} />
    </div>
  );
}

export default Logged_out;
