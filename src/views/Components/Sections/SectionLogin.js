import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
// import SectionFeed from "./SectionFeed";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      {/* <div className={classes.container}> */}
        <GridContainer justify="center">
          <GridItem className={classes.margin} xs={12} sm={12} md={8}>
            <h3  className={classes.title}>{props.props.title}</h3>
            <Button
              color="info"
              round
              href="https://www.instagram.com/stoaquino/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
          {/* <GridItem xs={12} sm={10} md={10} className={classes.marginAuto}>
            <SectionFeed account="stoaquino" numberOfMediaElements={6} />
          </GridItem> */}
        </GridContainer>
      {/* </div> */}
    </div>
  );
}
