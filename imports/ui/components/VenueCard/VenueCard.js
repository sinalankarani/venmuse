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

const VenueCard = ({ classes, venue }) => {
  console.log(venue);
  return (
    venue &&
    venue.profile.userType === "venue" && (
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={venue && venue._id ? `/profile/${venue && venue._id}` : ""}>
            <CardContent className={classes.content}>
              <CardMedia className={classes.media}>
                <img src={venue.profile.profileImage} className={classes.image} />
              </CardMedia>
              <div className={classes.venueDetails}>
                <Typography variant="h6">{venue.profile.title}</Typography>
                <Typography variant="body2" color="secondary">
                  {venue.profile.description}
                </Typography>
                <Typography>{venue.profile.location}</Typography>
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    )
  );
};

export default withStyles(styles)(VenueCard);
