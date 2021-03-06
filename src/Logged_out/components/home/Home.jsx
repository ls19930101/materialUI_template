import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";

import FeatureSelection from "./FeatureSelection";
import Footer from "./Footer";
import HeadSelection from "./HeadSelection";
import PriceSelection from "./PriceSelection";

function Home(props) {
  const { setSelectedMenu, title } = props;
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.up("lg"));
  const matchMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setSelectedMenu(title);
  }, [title, setSelectedMenu]);

  return (
    <>
      <HeadSelection matchLg={matchLg} />
      <FeatureSelection matchLg={matchLg} />
      <PriceSelection matchLg={matchLg} />
      <Footer />
    </>
  );
}

export default Home;
