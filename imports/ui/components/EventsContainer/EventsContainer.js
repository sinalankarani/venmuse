import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import EventsCard from "../EventsCard";
import styles from "./styles";

const EventsContainer = ({ classes, events }) => {
  return (
    <Grid container spacing={4} className={classes.eventContainer}>
      {events.map(event => (
        <Grid event key={event._id}>
          <EventsCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(EventsContainer);
