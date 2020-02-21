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
import PropTypes from "prop-types";
import styles from "./styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const VenueCard = ({ classes, venue }) => {
  return (
    venue &&
    venue.profile.userType === "venue" && (
      <CardActionArea>
        <Card className={classes.card}>
          <Link
            className={classes.link}
            to={venue && venue._id ? `/profile/${venue && venue._id}` : ""}
          >
            <CardContent className={classes.content}>
              <CardMedia className={classes.media}>
                <img
                  src={venue.profile.profileImage || "https://www.fillmurray.com/640/360"}
                  className={classes.image}
                />
              </CardMedia>
              <div className={classes.venueDetails}>
                <Typography variant="h6">{venue.profile.title || "[Venue Title]"}</Typography>
                <Typography color="primary">
                  <LocationOnIcon />
                  {venue.profile.location || "[Venue Location]"}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {venue.profile.description || "Description description"}
                </Typography>
              </div>
            </CardContent>
          </Link>
        </Card>
      </CardActionArea>
    )
  );
};

VenueCard.propTypes = {
  venue: PropTypes.shape({
    profile: PropTypes.shape({
      userType: PropTypes.string.isRequired,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string
    })
  }),
  classes: PropTypes.object
};

export default withStyles(styles)(VenueCard);
