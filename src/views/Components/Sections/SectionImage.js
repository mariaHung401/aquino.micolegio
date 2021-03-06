import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import image1 from "assets/img/img/class2.jpg";
import image2 from "assets/img/img/classTeacher.jpg";
import image3 from "assets/img/img/teacher2.jpg";
// import image4 from "assets/img/img/hall.jpg";

// import image5 from "assets/img/img/court5.jpg";
// import image6 from "assets/img/img/court8.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={6} className={classes.imagen}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
                {/* <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="First slide" className="slick-image" />
                </div> */}
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.imagen}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
