import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

const EventsCard = ({ classes, event }) => {
  return (
    <Card className={classes.card}>
      <Typography variant="h4">{event.title}</Typography>
      <Typography variant="h5">{event.artist}</Typography>
      <CardContent className={classes.content}>
        <Typography variant="body2">{event.description}</Typography>
        <Typography variant="body2">{event.date}</Typography>
        <Typography variant="body2">{event.location}</Typography>
        <Typography variant="body2">Created: {event.created}</Typography>
        <CardMedia
          className={classes.media}
          src={event && event.imageurl ? event.imageurl : null}
          style={{ backgroundImage: event && event.imageurl }}
        ></CardMedia>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(EventsCard);
