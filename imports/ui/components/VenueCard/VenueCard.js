import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

const VenueCard = ({ classes, venue }) => {
  return (
    <Card className={classes.card}>
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
    </Card>
  );
};

export default withStyles(styles)(VenueCard);
