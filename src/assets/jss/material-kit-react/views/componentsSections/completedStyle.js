import { container, title, description } from "assets/jss/material-kit-react";

const completedStyle = {
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
    textAlign: "center !important"
  },
  description: {
    ...description,
    textAlign: "justify",
  }
};

export default completedStyle;
