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
            <CardContent className={classes.content}>
            <CardMedia >
              <div className={classes.media}>
          <img src={event.imageurl ? event.imageurl : null}/>
          </div>
        </CardMedia>
      <Typography variant="h4">{event.title}</Typography>
      <Typography variant="h5">{event.artist}</Typography>
        <Typography variant="body2">{event.description}</Typography>
        <Typography variant="body2">{event.date}</Typography>
        <Typography variant="body2">{event.location}</Typography>
        <Typography variant="body2">Created: {event.created}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(EventsCard);
