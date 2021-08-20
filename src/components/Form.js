import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CountryDropdown } from "react-country-region-selector";

const useSytles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    width: "550px",
    textAlign: "center",
  },
  form: {
    padding: ".2rem",
    borderRadius: ".2rem",
    display: "flex",
    background: theme.palette.background.default,
  },
  textField: {
    border: "none",
    marginRight: "1.2rem",
    "&:focus": {
      outline: "none",
    },
  },
  countryDropDown: {
    padding: ".4rem",
    width: "300px",
    marginRight: "1.2rem",
    "& *": {
      margin: 0,
      border: "none",
      width: "100%",
      "&:focus": {
        outline: "none",
      },
    },
  },
  button: {
    background: "#1E776E",
    padding: ".4rem .9rem",
    borderRadius: ".2rem",
    cursor: "pointer",
    border: "none",
    color: "#fff",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "46px",
    fontWeight: 800,
    textTransform: "uppercase",
    color: "#fff",
    margin: "6.5rem 0 .5rem",
  },
  subtitle: {
    fontSize: "14px",
    margin: ".3rem 0 1.15rem",
    fontWeight: 200,
    color: "#fff",
  },
}));

const Form = () => {
  const classes = useSytles();
  const [country, setCountry] = useState({
    country: "",
    region: "",
  });
  const selectCountry = (val) => {
    setCountry({ country: val });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h5">
        UPDATES
      </Typography>
      <Typography className={classes.subtitle} component="p">
        Search a country
      </Typography>
      <form className={classes.form}>
        <div className={classes.countryDropDown}>
          <CountryDropdown
            value={country.country}
            onChange={(val) => selectCountry(val)}
          />
        </div>
        <input
          id="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          format="y-MM-dd"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <DateTimePicker onChange={onChange} value={value} /> */}
        <button className={classes.button}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
