import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import EventsCard from "../../components/EventsCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";

const EventsContainer = ({ classes, events }) => {
  return (
    <Grid container spacing={2} className={classes.eventContainer}>
      {events.map(event => (
        <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
          <EventsCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    events: Events.find({}).fetch()
  };
})(withStyles(styles)(EventsContainer));
