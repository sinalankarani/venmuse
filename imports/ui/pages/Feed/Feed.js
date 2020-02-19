import React from "react";
import EventsContainer from "../../containers/EventsContainer";
import ArtistContainer from "../../containers/ArtistContainer";
import VenueContainer from "../../containers/VenueContainer";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const Feed = ({ classes }) => {
  return (
    <div className={classes.feedPage}>
      <ArtistContainer />
      <VenueContainer />
      <EventsContainer />
    </div>
  );
};

export default withStyles(styles)(Feed);
