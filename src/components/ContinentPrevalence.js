import React from "react";
import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "8rem 3rem",
  },
  paper: {
    boxShadow: "0 0 5px 2px #0000001F",
    width: "400px",
    // padding: ".6rem",
    borderRadius: ".4rem",
    margin: "2rem",
    // border: "solid 2px #000",
  },
  header: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    marginBottom: "4rem",
  },
  rightSide: {
    background: theme.palette.background.primary,
    borderTopRightRadius: ".4rem",
    borderBottomRightRadius: ".4rem",
  },
  borders: {
    borderTop: ".8px solid #1E776E",
    borderBottom: ".8px solid #1E776E",
  },
  actionNumber: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 200,
  },
  actionName: {
    fontWeight: 700,
    fontSize: "10px",
    margin: ".4rem 0",
  },
  actionTotals: {
    color: "#fff",
    fontSize: "10px",
  },
  actionWrapper: {
    textAlign: "center",
    padding: ".7rem 0",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  continentName: {
    textTransform: "uppercase",
    fontSize: "",
    fontWeight: 700,
    color: "#000",
  },
  totalCases: {
    fontSize: "24px",
    fontWeight: 400,
    color: "#2FC8B8",
  },
  cases: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#000",
  },
  allCases: {
    fontSize: "12px",
    fontWeight: 200,
    color: "#888888",
  },
}));

const Item = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid className={classes.leftSide} item xs={6}>
            <Typography className={classes.continentName} variant="h6">
              AFRICA
            </Typography>
            <div>
              <Typography className={classes.totalCases}>11,270</Typography>
              <Typography className={classes.cases}>New cases</Typography>
            </div>
            <Typography className={classes.allCases}>
              All cases: 22,188,881
            </Typography>
          </Grid>
          <Grid className={classes.rightSide} item xs={6}>
            <div className={classes.actionWrapper}>
              <Typography className={classes.actionNumber}>11,270</Typography>
              <Typography className={classes.actionName}>Deaths</Typography>
              <Typography className={classes.actionTotals}>
                Total vaccinated: 14,784,254
              </Typography>
            </div>
            <div className={`${classes.actionWrapper} ${classes.borders}`}>
              <Typography className={classes.actionNumber}>11,270</Typography>
              <Typography className={classes.actionName}>Deaths</Typography>
              <Typography className={classes.actionTotals}>
                Total vaccinated: 14,784,254
              </Typography>
            </div>
            <div className={classes.actionWrapper}>
              <Typography className={classes.actionNumber}>11,270</Typography>
              <Typography className={classes.actionName}>Deaths</Typography>
              <Typography className={classes.actionTotals}>
                Total vaccinated: 14,784,254
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const Slides = () => {
  var items = [...new Array(7)];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h5">
        Per continents
      </Typography>
      <Carousel
        plugins={[
          // "arrows",
          "infinite",
          "centered",
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <ArrowBackIosOutlinedIcon />,
              arrowRight: <ArrowForwardIosOutlinedIcon />,
              addArrowClickHandler: true,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: { numberOfSlides: 3 },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            },
          },
        ]}
        animationSpeed={1000}
      >
        {items.map((item, i) => (
          <Item key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slides;
