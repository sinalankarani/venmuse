import React from "react";
import EventsCard from "../ui/components/EventsCard";
import { Events } from "../api";
import { withTracker } from "meteor/react-meteor-data";

const App = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h1>VenMuse</h1>
      <EventsCard />
    </React.Fragment>
  );
};

export default withTracker(() => {
  return {
    events: Events.find({}).fetch()
  };
})(App);
