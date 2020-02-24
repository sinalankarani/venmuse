import React from "react";
import EventsContainer from "../../containers/EventsContainer";
import ArtistContainer from "../../containers/ArtistContainer";
import VenueContainer from "../../containers/VenueContainer";
import { withStyles, Container, Typography } from "@material-ui/core";
import styles from "./styles";
import Footer from "../../components/Footer";

const Feed = ({ classes }) => {
  return (
    <div className={classes.feedPage}>
      <Container className={classes.banner}>
        <Typography className={classes.bannertext}>
          YOUR NEXT GIG AWAITS
        </Typography>
        <img className={classes.bannerimage} src="/images/concert.jpg" />
      </Container>
      <div className={classes.contentcontainer}>
        <Typography className={classes.title}>UPCOMING EVENTS</Typography>
        <EventsContainer />
        <Typography className={classes.title}>FEATURED ARTISTS</Typography>
        <ArtistContainer />
        <Typography className={classes.title}>HOTTEST VENUES</Typography>
        <VenueContainer />
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Feed);
