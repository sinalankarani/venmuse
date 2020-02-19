import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/';
import { Events } from '../api';
import { withTracker } from 'meteor/react-meteor-data';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Routes />
        </Router>
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('events');
  Meteor.subscribe('users');
  return {
    events: Events.find({}).fetch(),
    userId: Meteor.userId(),
    user: Meteor.user()
  };
})(App);
