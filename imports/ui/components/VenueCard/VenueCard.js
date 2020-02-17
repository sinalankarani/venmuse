import React from "react";
import { Card, Typography } from "@material-ui/core";

const VenueCard = ({ venues }) => {
  return venues.map(venue => {
    if (venue.profile.userType === "venue") {
      console.log(venue);
      return (
        <Card key={venue._id}>
          <h1>VENUE CARD</h1> {/*REMOVE LATER*/}
          {/* PROFILE IMAGE */}
          <div>
            <img
              src={venue.profile.profileImage}
              alt="profile-image"
              height="300px"
              width="600px"
            />
          </div>
          {/* USERNAME */}
          <Typography>{venue.username}</Typography>
          {/* EMAIL */}
          {venue.emails.map(email => {
            return <Typography key={venue._id}>{email.address}</Typography>;
          })}
          {/* LOCATION */}
          <Typography>{venue.profile.location}</Typography>
        </Card>
      );
    }
  });
};

export default VenueCard;
