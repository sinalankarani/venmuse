import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/';
import { Events } from '../api';
import { withTracker } from 'meteor/react-meteor-data';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core/';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
          <Router>
            <Routes />
          </Router>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('events');
  return {
    events: Events.find({}).fetch()
  };
})(App);
