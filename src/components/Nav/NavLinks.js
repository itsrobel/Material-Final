import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// @material-ui/icons

// core components
import Button from "../CustomButtons/Button.js";

import styles from "./styles/NavLinks";

const useStyles = makeStyles(styles);

export default function NavLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <HomeIcon className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/resume"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <LibraryBooksIcon className={classes.icons} /> Resume
        </Button>
      </ListItem>
    </List>
  );
}
