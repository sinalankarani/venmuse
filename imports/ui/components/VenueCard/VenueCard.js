import React from "react";
import { Card, Typography } from "@material-ui/core";

const VenueCard = ({venues}) => {
return (
            venues.map(venue => {
                console.log(venue)
                if(venue.profile.userType==="venue"){
                    return (
                        <Card key={venue._id}>
                            <Typography>{venue.username}</Typography>
                        </Card>
                        )
                    }
            })
)

};

export default VenueCard;
