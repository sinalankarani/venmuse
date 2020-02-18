import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const ArtistCard = ({ artist }) => {
  return (
    artist &&
    artist.profile.userType === "artist" && (
      <Card key={artist._id}>
        <CardContent>
          <h1>ARTIST CARD</h1> {/*REMOVE LATER*/}
          {/* PROFILE IMAGE */}
          <CardMedia>
            <div>
              <img
                src={artist.profile.profileImage}
                alt="profile-image"
                height="300px"
                width="600px"
              />
            </div>
          </CardMedia>
          {/* USERNAME */}
          <Typography>{artist.username}</Typography>
          {/* DESCRIPTION */}
          <Typography>{artist.profile.description}</Typography>
          {/* LOCATION */}
          <Typography>{artist.profile.location}</Typography>
        </CardContent>
      </Card>
    )
  );
};

export default ArtistCard;
