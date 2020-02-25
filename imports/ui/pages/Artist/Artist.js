import React from "react";
import ArtistContainer from "../../containers/ArtistContainer";
import { withStyles, Typography, Container } from "@material-ui/core";
import styles from "./styles";
import Footer from "../../components/Footer";

const Artist = ({ classes }) => {
  return (
    <div className={classes.artistPage}>
      <Container className={classes.banner}>
        <Typography className={classes.bannertext}>ARTISTS</Typography>
        <img className={classes.bannerimage} src="/images/artist.jpg" />
      </Container>
      <div className={classes.contentcontainer}>
        <ArtistContainer />
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Artist);
