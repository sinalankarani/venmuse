import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import VenueCard from "../../components/VenueCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";

const VenueContainer = ({ classes, venues, userId }) => {
  return (
    <Grid container className={classes.venueContainer}>
      {venues?.map(venue => {
        if (venue.profile.userType === "venue" && venue._id !== userId) {
          return (
            <Grid item key={venue._id} xs={12} sm={6} md={4} lg={3}>
              <VenueCard venue={venue} />
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
    venues: Meteor.users.find({}).fetch(),
    userId: Meteor.userId()
  };
})(withStyles(styles)(VenueContainer));
