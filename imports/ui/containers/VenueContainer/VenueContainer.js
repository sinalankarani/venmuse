import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import VenueCard from "../../components/VenueCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";

const VenueContainer = ({ classes, venues }) => {
  return (
    <Grid container spacing={4} className={classes.venueContainer}>
      {venues.map(venue => {
        if (venue.profile.userType === "venue") {
          return (
            <Grid item key={venue._id} xs={12} md={6} lg={4}>
              <VenueCard venues={venues} />
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
    venues: Meteor.users.find({}).fetch()
  };
})(withStyles(styles)(VenueContainer));
