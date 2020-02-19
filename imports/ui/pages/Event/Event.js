import React from "react";
import EventsContainer from "../../containers/EventsContainer";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const Event = ({ classes }) => {
  return (
    <div className={classes.eventPage}>
      <EventsContainer />
    </div>
  );
};

export default withStyles(styles)(Event);
