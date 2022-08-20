import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Services from "./ServicesPage.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import stylesComp from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);
const useStylesComp = makeStyles(stylesComp);

export default function LandingPage(props) {
  const classes = useStyles();
  const classesComp = useStylesComp();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/colegio/bannerTeacher.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Educación Primaria y Media General</h1>
              <h4>
                Excelencia educativa de 1° grado a 5° año con docentes
                altamente calificados, para cada área de formación.
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classesComp.main, classesComp.mainRaised)}>
        <div className={classesComp.container}>
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
}
