import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@brainhubeu/react-carousel/lib/style.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
