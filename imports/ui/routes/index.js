import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Archive from "../pages/Archive";
import Feed from "../pages/Feed";
import Signup from "../pages/Signup";
import Single from "../pages/Single";
import Account from "../pages/Account";
import NavBar from "../components/NavBar";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const Routes = ({ userId }) => {
  return !userId && !Meteor.loggingIn() ? (
    <Switch>
      <Route exact path="/account" component={Account} />
      <Redirect from="*" to="/account" />
    </Switch>
  ) : (
    <Fragment>
      {console.log(userId)}
      <NavBar />
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/single" component={Single} />
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
