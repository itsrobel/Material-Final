import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Parallax from "../Parallax/Parallax.js";

// sections for this page

import styles from "./styles/components.js";

import Nav from "../Nav/Nav.js"
import NavLinks from "../Nav/NavLinks.js"

import wall from "./img/Resume.jpg"
import resume from "./pdf/res1.pdf"
const useStyles = makeStyles(styles);

const defaultTheme = createMuiTheme({
  primary:{
    main:"#9999ff"
  }
})
export default function ResumePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <ThemeProvider theme={defaultTheme}>

    <div className={classes.body}>
      <Nav
        brand="See More"
        rightLinks={<NavLinks />}
        fixed
        {...rest}
      />
      <Parallax image={wall}>
        <div className={classes.container} >
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Robel Schwarz: Resume</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(classes.main, classes.dark)}>
        <object width="100%" height="800" data={resume} type="application/pdf">   </object>
      </div>
    </div>
    </ThemeProvider>
  );
}
