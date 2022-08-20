import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Info from "components/Typography/Info.js";
import Header from "components/Header/Header.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Carousel from "react-slick";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "components/Card/Card.js";

import DirectoraAcademica from "assets/img/teachers/Directivos/DirectoraAcademica.png";
import SubDirectoraAcademica from "assets/img/teachers/Directivos/Sub-directora.png";
import Administracion from "assets/img/teachers/Directivos/Administracion.png";
import ControlEvalucion from "assets/img/teachers/Directivos/ControlEvalucion.png";
import AsesorAcademico from "assets/img/teachers/Directivos/AsesorAcademico.png";
import CoordinadoraACDE from "assets/img/teachers/Directivos/CoordinadoraACDE.png";
import CoordinadoraBienestarEstudiantil from "assets/img/teachers/Directivos/CoordinadoraBienestarEstudiantil.png";
import CoordinadoraMediaG from "assets/img/teachers/Directivos/CoordinadoraMediaG.png";
import CoordinadorGruposCRP from "assets/img/teachers/Directivos/CoordinadorGruposCRP.png";
import EduPrimaria from "assets/img/teachers/Directivos/EduPrimaria.png";
import Secretaria from "assets/img/teachers/Directivos/Secretaria.png";
import Secretaria2 from "assets/img/teachers/Directivos/Secretaria2.png";

import PrimerGrado from "assets/img/teachers/Primaria/1erGrado.png";
import SegundoGrado from "assets/img/teachers/Primaria/2doGrado.png";
import TerceroGrado from "assets/img/teachers/Primaria/3erGrado.png";
import CuartoGrado from "assets/img/teachers/Primaria/4toGrado.png";
import QuintoGrado from "assets/img/teachers/Primaria/5toGrado.png";
import SextoGrado from "assets/img/teachers/Primaria/6toGrado.png";

import ArtesPatrimonio from "assets/img/teachers/Docentes/ArtesPatrimonio.png";
import Biologia from "assets/img/teachers/Docentes/Biologia.png";
import CastellanoLiteratura from "assets/img/teachers/Docentes/CastellanoLiteratura.png";
import EduFisica from "assets/img/teachers/Docentes/EduFisica.png";
import FSNOC from "assets/img/teachers/Docentes/FSN-OC.png";
import GCH from "assets/img/teachers/Docentes/GCH.png";
import Ingles from "assets/img/teachers/Docentes/Ingles.png";
import MatemaFisica from "assets/img/teachers/Docentes/MatemaFisica.png";
import MatematicasPrimariaMediaG from "assets/img/teachers/Docentes/MatematicasPrimariaMediaG.png";
import Quimica from "assets/img/teachers/Docentes/Quimica.png";

import Biblioteca from "assets/img/teachers/Bedeles/Biblioteca.png";
import Obrera from "assets/img/teachers/Bedeles/Obrera.png";
import Obrera2 from "assets/img/teachers/Bedeles/Obrera2.png";
import Obrero1 from "assets/img/teachers/Bedeles/Obrero1.png";
import Obrero3 from "assets/img/teachers/Bedeles/Obrero3.png";
import Vigilante from "assets/img/teachers/Bedeles/Vigilante.png";
import Vigilante2 from "assets/img/teachers/Bedeles/Vigilante2.png";
import Centenal1 from "assets/img/teachers/Bedeles/Centenal1.png";
import Centinela2 from "assets/img/teachers/Bedeles/Centinela2.png";

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
    autoplay: true
  };
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
          <div className={classesLand.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h2>
                    <strong>U. E. P. Santo Tomás de Aquino</strong>
                  </h2>
                  <h3>
                    <strong>Personal de la Institución</strong>
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
            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Header
                  brand="Menu"
                  color="info"
                  leftLinks={
                    <List className={classesLink.list}>
                      <ListItem className={classesLink.listItem}>
                        <Link to="/" color="info" simple className={classesLink.navLink}>
                          <strong></strong>
                        </Link>
                      </ListItem>
                      <ListItem className={classesLink.listItem}>
                        <Link to="/" color="info" simple className={classesLink.navLink}>
                          <strong></strong>
                        </Link>
                      </ListItem>
                    </List>
                  }
                />
              </GridItem>
            </GridContainer> */}
            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Educación Primaria</h2>
              </GridItem>
            </GridContainer> */}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={DirectoraAcademica} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={SubDirectoraAcademica} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Administracion} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={ControlEvalucion} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={AsesorAcademico} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CoordinadoraACDE} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CoordinadoraBienestarEstudiantil} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CoordinadoraMediaG} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CoordinadorGruposCRP} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={EduPrimaria} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Secretaria} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Secretaria2} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={PrimerGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={SegundoGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={TerceroGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CuartoGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={QuintoGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={SextoGrado} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={ArtesPatrimonio} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Biologia} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={CastellanoLiteratura} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={EduFisica} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={FSNOC} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={GCH} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Ingles} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={MatemaFisica} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={MatematicasPrimariaMediaG} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Quimica} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>


              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Biblioteca} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Obrera} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Obrera2} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Obrero1} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Obrero3} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Vigilante} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Vigilante2} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Centenal1} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Card carousel>
                  <Carousel {...settings}>
                      <div>
                        <img src={Centinela2} alt="First slide" className="slick-image" />
                      </div>
                    </Carousel>
                  </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      <Footer />
    </div>
  );
}
