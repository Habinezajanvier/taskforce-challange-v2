import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import { Toolbar } from "@material-ui/core";
import Response from "./Response";
import Slides from "./ContinentPrevalence";
import About from "./About";
import Contacts from "./Contacts";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "calc(100vh - 80px)",
    backgroundColor: theme.palette.background.primary,
    paddingBottom: "16rem",
  },
  navBar: {
    background: "inherit",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "1.2rem",
  },
  appLogo: {
    textTransform: "capitalize",
    fontWeight: "bolder",
  },
  button: {
    background: "#1E776E",
    padding: ".4rem .7rem",
    borderRadius: ".2rem",
    cursor: "pointer",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <AppBar className={classes.navBar}>
            <div className={classes.header}>
              <div>
                <Typography variant="h6">COVCALC</Typography>
              </div>
              <div className={classes.button}>Contacts</div>
            </div>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container>
          <Form />
        </Container>
      </div>
      <Response />
      <Slides />
      <About />
      <Contacts />
    </>
  );
}
