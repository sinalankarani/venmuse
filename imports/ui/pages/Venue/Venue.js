import React from "react";
import VenueContainer from "../../containers/VenueContainer";
import { withStyles, Typography, Container } from "@material-ui/core";
import styles from "./styles";

const Venue = ({ classes }) => {
  return (
    <div className={classes.venuePage}>
      <Container className={classes.banner}>
        <Typography className={classes.bannertext}>VENUES</Typography>
        <img className={classes.bannerimage} src="/images/venue.jpg" />
      </Container>{" "}
      <VenueContainer />
    </div>
  );
};

export default withStyles(styles)(Venue);
