import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // opacity: 0,
    position: "relative",
    marginTop: "-9.77rem",
  },
  responseWrapper: {
    width: "70%",
    margin: "0 auto",
    background: theme.palette.background.default,
    borderRadius: ".7rem",
  },
  responseHeader: {
    textAlign: "center",
    background: theme.palette.background.secondary,
    color: "#fff",
    borderTopLeftRadius: ".7rem",
    borderTopRightRadius: ".7rem",
    padding: "1.2rem",
  },
  responseSpec: {
    boxShadow: "10px 10px 8px 2px #0000001F, -10px 10px 8px 2px #0000001F",
    padding: "1.2rem",
    borderBottomLeftRadius: ".7rem",
    borderBottomRightRadius: ".7rem",
  },
  cumulativeNumber: {
    color: "#2FC8B8",
    fontSize: "46px",
    fontWeight: 200,
    margin: "1.4rem 0 .7rem",
  },
  actionNumber: {
    color: "#2FC8B8",
    fontSize: "26px",
    fontWeight: 200,
  },
  actionName: {
    fontWeight: 700,
    fontSize: "12px",
    margin: ".8rem 0",
  },
  actionTotals: {
    color: "#888888",
    fontSize: "12px",
  },
  actionWrapper: {
    textAlign: "center",
  },
}));

const Response = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.responseWrapper}>
        <div className={classes.responseHeader}>
          <Typography className={classes.cumulativeNumber} variant="h5">
            2,188,881
          </Typography>
          <Typography component="p">Cumulatively</Typography>
        </div>
        <div className={classes.responseSpec}>
          <Grid container spacing={2}>
            {[...new Array(6)].map((data) => (
              <Grid className={classes.actionWrapper} item xs={2}>
                <Typography className={classes.actionNumber} component="p">
                  11,270
                </Typography>
                <Typography className={classes.actionName} component="p">
                  Tests
                </Typography>
                <Typography className={classes.actionTotals} component="p">
                  2,188,881
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Response;
