import {
  Box,
  Button,
  Card,
  Grid,
  Hidden,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import React from "react";
import WaveBorder from "@/shared/components/WaveBorder";
import classNames from "classnames";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(4),
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  gridContainer: {
    width: "100%",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 540,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 720,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1170,
    },
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
}));

function HeadSelection({ matchLg }) {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div
                className={classNames(
                  classes.containerFix,
                  classes.gridContainer
                )}
              >
                <Grid container spacing={8}>
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      height="100%"
                      justifyContent="space-between"
                    >
                      <Box mb={4}>
                        <Typography variant={matchLg ? "h3" : "h4"}>
                          Vite、Material、React-Router、Mobx
                        </Typography>
                      </Box>
                      <Box>
                        <Box mb={2}>
                          <Typography
                            variant={matchLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            支持pc端、移动端多端适配的响应式网站,组件交互速度达到极致.使用vite及material-UI进行快速开发
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          // href="https://github.com/dunky11/react-saas-template"
                        >
                          Download from GitHub
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6} style={{ margin: "auto" }}>
                      <img
                        src={"/logged_out/headerImage.jpg"}
                        className={classes.image}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        animationNegativeDelay={2}
      />
    </>
  );
}

export default HeadSelection;
