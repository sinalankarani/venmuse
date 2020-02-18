import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const VenueCard = ({ venues }) => {
  return venues.map(venue => {
    if (venue.profile.userType === "venue") {
      // console.log(venue);
      return (
        <Card key={venue._id}>
          <CardContent>
            <h1>VENUE CARD</h1> {/*REMOVE LATER*/}
            {/* PROFILE IMAGE */}
            <CardMedia>
              <img
                src={venue.profile.profileImage}
                alt="profile-image"
                height="300px"
                width="600px"
              />
            </CardMedia>
            {/* USERNAME */}
            <Typography>{venue.username}</Typography>
            {/* DESCRIPTION */}
            <Typography>{venue.profile.description}</Typography>
            {/* LOCATION */}
            <Typography>{venue.profile.location}</Typography>
          </CardContent>
        </Card>
      );
    }
  });
};

export default VenueCard;
