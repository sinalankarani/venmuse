import React from "react";
import VenueCard from "../ui/components/VenueCard";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/";
import EventsContainer from "../ui/components/EventsContainer";
import { Events } from "../api";
import { withTracker } from "meteor/react-meteor-data";
// import { Meteor } from "meteor/meteor";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
            <Router>
        <Routes />
      </Router>
        <h1>VenMuse</h1>
        <VenueCard venues={this.props.users}/>
        <EventsContainer events={this.props.events} />
      
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('events');
  Meteor.subscribe('users');
  return {
    events: Events.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUsers: Meteor.user(),
    userId: Meteor.userId()
  };
})(App);
