import { Box, Typography, makeStyles } from "@material-ui/core";

import React from "react";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1) * 1.5,
  },
}));

function FeatureCard(props) {
  const { item } = props;
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.wrapper}>{item.icon}</Box>
      <Typography variant="h5" paragraph>
        {item.headline}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {item.text}
      </Typography>
    </div>
  );
}

export default FeatureCard;
