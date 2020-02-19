import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

const VenueCard = ({ classes, venues }) => {
  return venues.map(venue => {
    if (venue.profile.userType === "venue") {
      return (
        <Card key={venue._id} className={classes.card}>
          <CardContent className={classes.content}>
            <CardMedia className={classes.media}>
              <img src={venue.profile.profileImage} className={classes.image} />
            </CardMedia>
            <div className={classes.venueDetails}>
              <Typography variant="h4">{venue.profile.title}</Typography>
              <Typography>{venue.profile.description}</Typography>
              <Typography>{venue.profile.location}</Typography>
            </div>
          </CardContent>
        </Card>
      );
    }
  });
};

export default withStyles(styles)(VenueCard);
