import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import ArtistCard from "../../components/ArtistCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";

const ArtistContainer = ({ classes, artists, userId }) => {
  return (
    <Grid container spacing={4} className={classes.artistContainer}>
      {artists?.map(artist => {
        if (artist.profile.userType === "artist" && artist._id !== userId) {
          return (
            <Grid item key={artist._id} xs={12} sm={6} md={4} lg={3}>
              <ArtistCard artist={artist} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    artists: Meteor.users.find({}).fetch(),
    userId: Meteor.userId()
  };
})(withStyles(styles)(ArtistContainer));
