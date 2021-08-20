import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import picture from "../assets/images/myPicture.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#EEF6F6",
  },
  image: {
    width: "100%",
  },
  imageWrapper: {
    background: "rgb(47,58,96)",
  },
  mainWrapper: {
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontSize: "32px",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "1.2rem",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: 800,
    color: "#000",
    margin: ".4rem 0 .7rem",
  },
  skills: {
    fontSize: "12px",
    fontWeight: 200,
    color: "#888888",
    margin: ".3rem 0",
  },
}));

const skills = [
  "JavaScript",
  "React",
  "ReactNative",
  "NodeJs",
  "Python",
  "Django",
  "HTML & CSS",
  "Docker",
];

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.imageWrapper} item sm={12} md={6}>
          <img className={classes.image} src={picture} alt="_profile_" />
        </Grid>
        <Grid className={classes.mainWrapper} item sm={12} md={6}>
          <div>
            <Typography className={classes.name} variant="h6">
              Janvier Habineza
            </Typography>
            <div>
              <Typography className={classes.subtitle}>Skills</Typography>
              <Grid container>
                {skills.map((skill, i) => (
                  <Grid item xs={6} key={i}>
                    <Typography className={classes.skills}>{skill}</Typography>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
