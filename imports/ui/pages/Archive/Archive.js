import React from "react";
import ArtistContainer from "../../containers/ArtistContainer";
import VenueContainer from "../../containers/VenueContainer";
import EventsContainer from "../../containers/EventsContainer";

const Archive = () => {
  return (
    <div>
      <h1>Archive Page</h1>
      <ArtistContainer />
      <VenueContainer />
      <EventsContainer />
    </div>
  );
};

export default Archive;
