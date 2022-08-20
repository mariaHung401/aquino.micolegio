/* eslint-disable react/jsx-key */
import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "3d-react-carousal";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CarouselX from "react-slick";
import Card from "components/Card/Card.js";

import ClassRoom1 from "assets/img/students/classroom3.jpg";
import ClassRoom2 from "assets/img/students/classroom.jpg";
import ClassRoom3 from "assets/img/students/classroom2.jpg";
import ClassRoom4 from "assets/img/students/classroom7.jpg";
import ClassRoom5 from "assets/img/students/classroom8.jpg";
import ClassRoom6 from "assets/img/students/classroom10.jpg";

import ClassRoom7 from "assets/img/students/classroom5.jpg";
import ClassRoom8 from "assets/img/students/classroom6.jpg";
import ClassRoom9 from "assets/img/students/classroom9.jpg";

import callClass1 from "assets/img/students/callClass.jpg";
import callClass2 from "assets/img/students/callClass2.jpg";
import callClass3 from "assets/img/students/callClass3.jpg";
import callClass4 from "assets/img/students/callClass4.jpg";
import callClass5 from "assets/img/students/callClass5.jpg";
import callClass6 from "assets/img/students/callClass6.jpg";
import callClass7 from "assets/img/students/callClass7.jpg";
import callClass8 from "assets/img/students/callClass8.jpg";
import callClass9 from "assets/img/students/callClass9.jpg";
import callClass10 from "assets/img/students/callClass10.jpg";
import callClass11 from "assets/img/students/callClass11.jpg";
import callClass12 from "assets/img/students/callClass12.jpg";
import callClass13 from "assets/img/students/callClass13.jpg";
import callClass14 from "assets/img/students/callClass14.jpg";
import callClass15 from "assets/img/students/callClass15.jpg";

import logo from "assets/img/colegio/logo.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import stylesComp from "assets/jss/material-kit-react/views/components.js";
import stylesLand from "assets/jss/material-kit-react/views/landingPage.js";
import stylesLink from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const useStylesComp = makeStyles(stylesComp);
const useStylesLand = makeStyles(stylesLand);
const useStylesLink = makeStyles(stylesLink);

export default function TeachersPage(props) {
  const classes = useStyles();
  const classesComp = useStylesComp();
  const classesLand = useStylesLand();
  const classesLink = useStylesLink();

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { ...rest } = props;

  let slides = [
    <img src={ClassRoom1} alt="1" />,
    <img src={ClassRoom2} alt="2" />,
    <img src={ClassRoom3} alt="3" />,
    <img src={ClassRoom4} alt="4" />,
    <img src={ClassRoom5} alt="5" />,
    <img src={ClassRoom6} alt="6" />,
  ];
  return (
    <div>
      <Header
        color="transparent"
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/colegio/bannerTeacher.png")}>
        <div className={classesLand.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2>
                  <strong>U. E. P. Santo Tomás de Aquino</strong>
                </h2>
                <h3>
                  <strong>Galería</strong>
                </h3>
              </div>
            </GridItem>
            <GridItem>
              <div className={classes.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classesComp.main, classesComp.mainRaised)}>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Carousel slides={slides} autoplay={false} interval={4000} />
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={ClassRoom7}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={ClassRoom8}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={ClassRoom9}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={callClass6}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass7}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass8}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass9}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass10}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={callClass1}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass2}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass3}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass4}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass5}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card carousel>
                <CarouselX {...settings}>
                  <div>
                    <img
                      src={callClass11}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass12}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass13}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass14}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={callClass15}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                </CarouselX>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
