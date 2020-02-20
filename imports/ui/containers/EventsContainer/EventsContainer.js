import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import EventsCard from "../../components/EventsCard";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";

const EventsContainer = ({ classes, events }) => {
  return (
    <Grid className={classes.eventContainer}>
      {events.map(event => (
        <Grid item key={event._id}>
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
