import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2">
      Designed by{" "}
      <Link
        style={{ fontWeight: "bold" }}
        color="inherit"
        href="https://awesomity.rw/"
      >
        Awesomity Lab
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
    color: theme.palette.text.tertiary,
    backgroundColor: "#175B55",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Typography variant="body1">
          Developed by{" "}
          <span style={{ fontWeight: "bold" }}>Janvier Habineza</span>
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
