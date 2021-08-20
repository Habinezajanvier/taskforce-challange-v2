import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1E776E",
    textAlign: "center",
    padding: "3rem 0",
    width: "100%",
    color: "#fff",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: "2.2rem",
    fontWeight: 800,
  },
  subTitle: {
    margin: "1.9rem 0 .4rem",
    fontSize: "14px",
    fontWeight: 700,
  },
  text: {
    fontSize: "16px",
    fontWeight: 200,
    color: "#EDF6F6",
  },
}));

const Contacts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h5">
        Reach Me
      </Typography>
      <Typography className={classes.subTitle} variant="subtitle1">
        Email
      </Typography>
      <Typography component="p">habinezajanvier688@gmail.com</Typography>
      <Typography className={classes.subTitle} variant="subtitle1">
        Phone
      </Typography>
      <Typography component="p">+250 789 121 324/ +250 7865 265 540</Typography>
      <Typography className={classes.subTitle} variant="subtitle1">
        Profile
      </Typography>
      <Typography component="a">linked in profile</Typography>
    </div>
  );
};

export default Contacts;
