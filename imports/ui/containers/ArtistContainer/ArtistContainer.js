import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import ArtistCard from "../../components/ArtistCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const ArtistContainer = ({ classes, artists }) => {
  return (
    <Grid container spacing={4} className={classes.artistContainer}>
      {artists.map(artist => (
        <Grid item key={artist._id} xs={12} md={6} lg={4}>
          <ArtistCard artist={artist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  console.log(Meteor.users.find({}).fetch());
  return {
    artists: Meteor.users.find({}).fetch()
  };
})(withStyles(styles)(ArtistContainer));
