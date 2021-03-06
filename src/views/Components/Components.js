import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionImage from "./Sections/SectionImage.js";
import SectionBanner from "./Sections/SectionBanner.js";
import SectionVision from "./Sections/SectionVision.js";
import SectionMision from "./Sections/SectionMision.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SecctionReview from "./Sections/SecctionReview.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import logo from "assets/img/colegio/logoAquino.png";

const useStyles = makeStyles(styles);
const dataCollege = {
  collegeName: "U. E. P. Santo Tomás de Aquino",

  secctionReview: {
    title: "Reseña Histórica del Plantel",
    fullText1:
      "La institución funciona a partir del mes de septiembre de 1989 en el sector San Ramón, calle 22 N° 6-619, de la Parroquia y Municipio San Francisco en el Estado Zulia. A partir del mes de diciembre de 1988 se comenzó a organizar el proyecto de la UNIDAD EDUCATIVA PRIVADA SANTO TOMÁS DE AQUINO. El Sr Andrés León, Profesor Tomás Valverde y la Licenciada Mónica León, apoyados por el presbítero Martín Arroyo Pino, se propusieron la creación de un plantel educativo para la preparación académica y la formación de los valores de los niños, niñas y adolescentes, iniciando las operaciones en el mes de septiembre de 1989 con la primera etapa de educación básica y el séptimo y octavo de la tercera.",
    fullText2:
      "Año tras año se fueron incrementando los grados hasta el segundo año del ciclo diversificado mención ciencias, hoy media general. La aceptación y confianza manifestada por la comunidad, así como los logros conseguidos en la educación superior y posterior desempeño de nuestros estudiantes en sus diferentes puestos de trabajo nos dio la satisfacción por el esfuerzo y empeño puesto por los iniciadores de este proyecto."
  },

  facilitiesImages: {
    title: "Nuestras Instalaciones",
  },

  Philosophy: {
    vision: {
      title: "Visión",
      text: "Ofrecer una formación de calidad integral a la comunidad general, apoyados en el estado docente que es la expresión rectora del Estado en Educación, y se rige por los principios de integralidad, cooperación, solidaridad, concurre diferentes responsabilidades. La institución garantiza la idoneidad de nuestros trabajadores y las trabajadoras de la educación, la infraestructura, la dotación y equipamiento, los planes, programas, proyectos, actividades y los servicios que aseguren a todos y todas igualdad de condiciones y oportunidades y la promoción de la participación protagónica y corresponsable de las familias, la comunidad educativa y las organizaciones comunitarias."
    },
    mision: {
      title: "Misión",
      text: "Ser formadores de la comunidad en general, con mira a los principios de la democracia participativa y protagónica, la responsabilidad social, la igualdad entre todos los ciudadanos y ciudadanas sin discriminaciones de ninguna índole, la formación para la independencia, la libertad y la emancipación, la valoración y defensa de la soberanía, la formación en una cultura para la paz, la justicia social, el respeto a los derechos humanos, la práctica de la equidad y la inclusión; la sustentabilidad del desarrollo, el derecho a la igualdad de género, el fortalecimiento de la identidad nacional, la lealtad a la patria e integración latinoamericana y caribeña."
    },
  },

  feed: {
    title: "Mira Nuestro Instagram",
  },

  contacts: {
    title: "Contácta con Nosotros",
    direct: "Calle 22 #9-619 Sector San Ramón, San Francisco, Zulia, Venezuela.",
    number: "0414-6327719",
    mail: "gerencia@stoaquino.com"
  },
};

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 500,
          color: "info",
        }}
        {...rest}
      />

      <Parallax image={require("assets/img/colegio/bannerOneColor.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2>
                  <strong>{dataCollege.collegeName}</strong>
                </h2>
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

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SecctionReview props={dataCollege.secctionReview} />

        <SectionCarousel props={dataCollege.facilitiesImages} />
        <SectionImage />

        <SectionVision props={dataCollege.Philosophy.vision} />

        <SectionMision props={dataCollege.Philosophy.mision} />

        <SectionLogin props={dataCollege.feed} />

        <SectionBanner />

        <SectionDownload props={dataCollege.contacts} />
      </div>
      <Footer />
    </div>
  );
}
