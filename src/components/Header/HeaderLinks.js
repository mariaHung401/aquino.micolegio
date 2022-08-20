import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';

import cuentas from "assets/img/img/cuentas.jpg";
import solicitudes from "assets/img/img/solicitudes.jpg";
import reglamentoDisciplinario from "assets/img/docs/reglamentoDisciplinario.pdf";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={<strong>Nuestros Servicios</strong>}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AddToPhotosRoundedIcon}
          dropdownList={[
            <Link to="/servicios" className={classes.navLink}>
              <strong>Materias Complementarias</strong>
            </Link>,
            <Button
              href={reglamentoDisciplinario}
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <strong>Reglamento Disciplinario</strong>
            </Button>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={<strong>Información 2021-2022</strong>}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={DescriptionRoundedIcon}
          dropdownList={[
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLScYhkcywsawzb_FYxljqtydJk-soHg6NCSdaEsBhDW2g4JdXw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <strong>Censo Escolar</strong>
            </Button>,
            <Button
              href={solicitudes}
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <strong>Solicitud del personal</strong>
            </Button>,
            <Button
              href={cuentas}
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <strong>Números de Cuenta</strong>
            </Button>
            // <Link to="/" className={classes.dropdownLink}>
            //   All components
            // </Link>,
            // <a
            //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Documentation
            // </a>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/docentes" className={classes.navLink}>
          <AccountCircleRoundedIcon className={classes.icons} /> <strong>Personal de la Institución</strong>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/galeria" className={classes.navLink}>
          <PhotoLibraryRoundedIcon className={classes.icons} /> <strong>Galería</strong>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="https://www.youtube.com/channel/UCwRjrwwzCDVyMoDRKpGeTIQ"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FastForwardRoundedIcon /><strong>YouTube</strong>
        </Button>
      </ListItem>

    </List>
  );
}