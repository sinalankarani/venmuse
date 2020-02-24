import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  withStyles,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles";
import { Meteor } from "meteor/meteor";

const EventsCard = ({ classes, event }) => {
  let counter = event?.artistApplied?.length;
  return (
    <CardActionArea>
      <Card className={classes.card}>
        <Link
          className={classes.link}
          to={event && event._id ? `/profile/${event && event._id}` : ""}
        >
          <CardContent className={classes.content}>
            <CardMedia className={classes.media}>
              <img src={event?.imageurl} className={classes.image} />
            </CardMedia>
            <div className={classes.eventDetails}>
              {event.owner === Meteor.userId() &&
              event?.artistApplied?.length ? (
                <div className={classes.notifyCounter}>
                  <p className={classes.counter}>{counter}</p>
                </div>
              ) : null}
              <Typography
                variant="body1"
                color="primary"
                className={classes.date}
              >
                {event.date}
              </Typography>
              <Typography className={classes.title} variant="h6">
                {event.title}
              </Typography>
              <Typography variant="body1">
                <Fragment>
                  {/* {console.log(event.lineup)} */}
                  {event.lineup.length ? (
                    `Line Up: ${lineup.map(artist => artist.profile.title)}`
                  ) : (
                    <Box component="span" className={classes.lineup}>
                      Seeking Artists
                    </Box>
                  )}
                </Fragment>
              </Typography>
              {event.lineup.length ? (
                <Typography className={classes.lineuplist} variant="body1">
                  Line Up: {event.lineup.join(", ")}
                </Typography>
              ) : (
                <Box component="span" className={classes.lineup}>
                  Seeking Artists
                </Box>
              )}
            </div>
          </CardContent>
        </Link>
      </Card>
    </CardActionArea>
  );
};

EventsCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    artist: PropTypes.array,
    location: PropTypes.string
  }),
  classes: PropTypes.object
};

export default withStyles(styles)(EventsCard);
