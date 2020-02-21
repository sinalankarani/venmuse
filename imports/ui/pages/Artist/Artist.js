import React from "react";
import ArtistContainer from "../../containers/ArtistContainer";
import { withStyles, Typography, Container } from "@material-ui/core";
import styles from "./styles";

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
    </div>
  );
};

export default withStyles(styles)(Artist);
