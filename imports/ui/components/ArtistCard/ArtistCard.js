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

const ArtistCard = ({ classes, artist }) => {
  return (
    artist &&
    artist.profile.userType === "artist" && (
      <CardActionArea>
        <Card className={classes.card}>
          <Link
            className={classes.link}
            to={artist && artist._id ? `/profile/${artist && artist._id}` : ""}
          >
            <CardContent className={classes.content}>
              <CardMedia className={classes.media}>
                <img
                  src={
                    artist.profile.profileImage
                      ? artist.profile.profileImage
                      : null
                  }
                  alt="profile-image"
                  height="300px"
                  width="600px"
                  className={classes.image}
                />
              </CardMedia>
              <div className={classes.eventDetails}>
                <Typography variant="h6">{artist.profile.title}</Typography>
                <Typography variant="body2" color="secondary">
                  {artist.profile.description}
                </Typography>
                <Typography variant="body2">
                  {artist.profile.location}
                </Typography>
              </div>
            </CardContent>
          </Link>
        </Card>
      </CardActionArea>
    )
  );
};

export default withStyles(styles)(ArtistCard);
