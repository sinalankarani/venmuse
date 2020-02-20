import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

const EventsCard = ({ classes, event }) => {
  return (
    <CardActionArea>
      <Card className={classes.card}>
        <Link
          className={classes.link}
          to={event && event._id ? `/profile/${event && event._id}` : ""}
        >
          <CardContent className={classes.content}>
            <CardMedia className={classes.media}>
              <img
                src={event.imageurl ? event.imageurl : null}
                className={classes.image}
              />
            </CardMedia>
            <div className={classes.eventDetails}>
              <Typography variant="body1" color="primary">
                {event.date}
              </Typography>
              <Typography variant="h6">{event.title}</Typography>
              <Typography variant="body1">{event.artist}</Typography>
              <Typography variant="body2">{event.location}</Typography>
            </div>
          </CardContent>
        </Link>
      </Card>
    </CardActionArea>
  );
};

export default withStyles(styles)(EventsCard);
