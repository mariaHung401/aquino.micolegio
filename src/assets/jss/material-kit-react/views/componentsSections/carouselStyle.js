import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";
import image from "assets/img/colegio/bannerStudents.png";

const carouselStyle = {
  image: {
    minHeight: "90vh",
    maxHeight: "1200px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",
    maskImage:" linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    zIndex:" -1,"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important",
    marginTop: "-100px"
  },
  margin: {
    padding: "30px"
  },
};

export default carouselStyle;
