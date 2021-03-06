import { Box, Typography, makeStyles } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";
import React from "react";

const useStyle = makeStyles((theme) => ({
  card: {
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

function PriceCard({ features }) {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <Box mb={2}>
        <Typography variant="h6" className={classes.title}>
          title
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h4">
          <span>
            $14.99
            <Typography display="inline"> / month</Typography>
          </span>
        </Typography>
      </Box>
      {features.map((i) => (
        <Box key={i} display="flex" alignItems="center">
          <CheckIcon />
          <Box ml={1}>
            <Typography>{i}</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default PriceCard;
