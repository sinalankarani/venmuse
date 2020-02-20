import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Event from "../pages/Event";
import Artist from "../pages/Artist";
import Venue from "../pages/Venue";
import Feed from "../pages/Feed";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import NavBar from "../components/NavBar";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const Routes = ({ userId }) => {
  return !userId && !Meteor.loggingIn() ? (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Redirect from="*" to="/signup" />
    </Switch>
  ) : (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/venue" component={Venue} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />
        <Redirect from="*" to="/feed" />
      </Switch>
    </Fragment>
  );
};

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(Routes);
