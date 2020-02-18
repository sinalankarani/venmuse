import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

const ArtistCard = ({ classes, artist }) => {
  return (
    artist &&
    artist.profile.userType === "artist" && (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <CardMedia className={classes.media}>
            <img
              src={
                artist.profile.profileImage ? artist.profile.profileImage : null
              }
              alt="profile-image"
              height="300px"
              width="600px"
              className={classes.image}
            />
          </CardMedia>
          <div className={classes.eventDetails}>
            <Typography variant="h5">{artist.username}</Typography>
            <Typography variant="body2">
              {artist.profile.description}
            </Typography>
            <Typography variant="body2">{artist.profile.location}</Typography>
          </div>
        </CardContent>
      </Card>
    )
  );
};

export default withStyles(styles)(ArtistCard);
