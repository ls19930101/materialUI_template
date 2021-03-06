import { Box, Grid, Typography } from "@material-ui/core";

import PriceCard from "./PriceCard";
import React from "react";

const features = ["Feature1", "Feature2", "Feature3"];

function PriceSelection({ matchLg }) {
  return (
    <div style={{ backgroundColor: "#fff" }} className="lg-p-top">
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Pricing
      </Typography>
      <Box>
        <Grid container spacing={matchLg ? 5 : 4} className={"container-fluid"}>
          <Grid item xs={12} sm={6} lg={3}>
            <PriceCard features={features} data-aos="zoom-in-up" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard features={features} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <PriceCard features={features} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <PriceCard features={features} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PriceSelection;
