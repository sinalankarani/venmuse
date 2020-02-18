import ArtistContainer from "../../containers/ArtistContainer";
import VenueContainer from "../../containers/VenueContainer";
import EventsContainer from "../../containers/EventsContainer";

import React from "react";

const Archive = () => {
  return (
    <div>
      <ArtistContainer />
      <VenueContainer />
      <EventsContainer />
    </div>
  );
};

export default Archive;
