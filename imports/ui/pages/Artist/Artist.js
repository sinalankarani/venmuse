import React from "react";
import ArtistContainer from "../../containers/ArtistContainer";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const Artist = ({ classes }) => {
  return (
    <div className={classes.artistPage}>
      <ArtistContainer />
    </div>
  );
};

export default withStyles(styles)(Artist);
