import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import VenueCard from "../../components/VenueCard";
import styles from "./styles";

const VenueContainer = ({ classes, venues }) => {
  return (
    <Grid container spacing={4} className={classes.venueContainer}>
      {venues.map(venue => {
          if(venue.profile.userType==="venue"){
            return (
              <VenueCard venues={venues}/>
            )
          }

})}
    </Grid>
  );
};

export default withStyles(styles)(VenueContainer);