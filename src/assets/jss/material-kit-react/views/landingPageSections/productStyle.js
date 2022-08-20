import { container, title, description } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    ...description,
    textAlign: "justify",
  }
};

export default productStyle;
