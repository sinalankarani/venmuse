import React from "react";
import EventsCard from "../ui/components/EventsCard";
import VenueCard from "../ui/components/VenueCard";


const App = () => {
  return (
    <React.Fragment>
      <h1>VenMuse</h1>
      <EventsCard />
      <VenueCard/>
    </React.Fragment>
  );
};

export default App;
