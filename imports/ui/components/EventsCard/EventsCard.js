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
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={event && event._id ? `/profile/${event && event._id}` : ""}>
          <CardContent className={classes.content}>
            <CardMedia className={classes.media}>
              <img src={event.imageurl ? event.imageurl : null} className={classes.image} />
            </CardMedia>
            <div className={classes.eventDetails}>
              <Typography variant="h5">{event.title}</Typography>
              <Typography variant="h6">{event.artist}</Typography>
              <Typography variant="body2">{event.date}</Typography>
              <Typography variant="body2">{event.location}</Typography>
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(EventsCard);
