import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Info from "components/Typography/Info.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{props.props.title}</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h4>
              <Info><strong>Ubicacion: </strong></Info>
            </h4>
            <h4>
              {props.props.direct}
            </h4>
            <h4>
              <Info><strong>Contacto: </strong></Info>
            </h4>
            <h4>
              {props.props.number}<br />
              {props.props.mail}<br />
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
