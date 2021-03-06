import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";

const downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important",
    marginTop: "-200px"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginBottom: "100px",
    textDecoration: "none",
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};

export default downloadStyle;
