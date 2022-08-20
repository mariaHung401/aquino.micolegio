import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>{props.props.title}</h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h5>
                {props.props.text}
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

