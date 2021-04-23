import { container, title } from "../../globalstyle/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFF"
  },
  imageRight: {
    display: "flex",
    width:"20rem"
  },
  imageLeft: {
    display: "flex",
    width:"30rem"
  }
};

export default pillsStyle;
