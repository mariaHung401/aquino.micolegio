import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
import TextFormatRoundedIcon from '@material-ui/icons/TextFormatRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Info from "components/Typography/Info.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function ServicesPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Educación Primaria</h2>
          <Info>
            <h4>
              <strong>Además de las áreas regulares, tambien contamos con clases de:</strong>
            </h4>
          </Info>
        </GridItem>
      </GridContainer>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<h3><strong>Música</strong></h3>}
              icon={MusicNoteRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<h3><strong>Inglés</strong></h3>}
              icon={TextFormatRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<h3><strong>Computación</strong></h3>}
              // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={ComputerRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea
              title={<h3><strong>Tenemos a su disposición</strong></h3>}
              description="Departamentos de Bienestar
              Estudiantil y Artes, Cultura y Desarrollo Endogeno."
              icon={AddCircleOutlineRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Educación Media General</h2>
          <Info>
            <h4>
              <strong>Además de las áreas regulares, tambien contamos con clases de:</strong>
            </h4>
          </Info>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem justify="center" xs={12} sm={12} md={6}>
          <InfoArea
            title={<h3><strong>Computación</strong></h3>}
            // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={ComputerRoundedIcon}
            iconColor="warning"
            vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title={<h3><strong>Tenemos a su disposición</strong></h3>}
              description="Departamentos de Bienestar
              Estudiantil, GCRP, Arte, Cultura y Desarrollo Endógeno."
              icon={AddCircleOutlineRoundedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
    </div>
  );
}
