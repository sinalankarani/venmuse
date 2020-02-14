import React, { Fragment } from 'react';
import { BrowserRouter as  Route, Switch } from 'react-router-dom';
import Archive from '../pages/Archive'
import Feed from '../pages/Feed';
import Signup from '../pages/Signup';
import Single from '../pages/Single';
import Account from '../pages/Account';
import NavBar from '../components/NavBar';
import {Meteor} from 'meteor/meteor';

export default (props) => {
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/single" component={Single} />
          </Switch>
        </Fragment>
      )
    }

    // export default withTracker(() => {
    //     return {
    //     }
    // })();