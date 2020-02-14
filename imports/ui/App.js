import React from "react";
import EventsCard from "../ui/components/EventsCard";
import { Events } from "../api";
import { withTracker } from "meteor/react-meteor-data";
// import { Meteor } from "meteor/meteor";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>VenMuse</h1>
        <EventsCard />
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  // Meteor.subscribe("events");
  return {
    events: Events.find({}).fetch()
  };
})(App);
