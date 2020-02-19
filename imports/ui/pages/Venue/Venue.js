import React from "react";
import VenueContainer from "../../containers/VenueContainer";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const Venue = ({ classes }) => {
  return (
    <div className={classes.venuePage}>
      <VenueContainer />
    </div>
  );
};

export default withStyles(styles)(Venue);
