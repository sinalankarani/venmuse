import React from "react";
import EventsContainer from "../../containers/EventsContainer";
import ArtistContainer from "../../containers/ArtistContainer";
import VenueContainer from "../../containers/VenueContainer";

const Feed = () => {
  return (
    <div>
      <h1>Feed Page</h1>
      <ArtistContainer />
      <VenueContainer />
      <EventsContainer />
    </div>
  );
};

export default Feed;
