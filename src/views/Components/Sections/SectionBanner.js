import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
// import stylesImageBack from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
// const useStylesImageBack = makeStyles(stylesImageBack);

export default function SectionBanner(props) {
  const classes = useStyles();
  // const classesImageBack = useStylesImageBack();

  return (
    <div className={classes.section}>
      <div className={classes.image}>

      </div>
    </div>
  );
}
