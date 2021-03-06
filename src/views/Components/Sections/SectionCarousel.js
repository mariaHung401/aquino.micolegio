import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import stylesImageBack from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useStylesImageBack = makeStyles(stylesImageBack);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const classesImageBack = useStylesImageBack();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={classesImageBack.section}>
      <div className={classesImageBack.container}>
      </div>
    </div>
  );
}
