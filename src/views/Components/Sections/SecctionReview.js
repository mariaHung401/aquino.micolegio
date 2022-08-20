import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>{props.props.title}</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            {props.props.fullText1}
          </h5>
          <h5>
            {props.props.fullText2}
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
