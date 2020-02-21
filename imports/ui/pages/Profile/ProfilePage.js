import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Profile from "./Profile";
import { Events } from "../../../api";

const ProfilePage = props => {
  let { id } = useParams();
  if (
    Meteor.users.find({ _id: id }).fetch().length ||
    Events.find({ _id: id }).fetch().length
  ) {
    return <Profile userId={id} eventId={id} />;
  }
  return <Redirect from="*" to="/feed" />;
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    userId: Meteor.userId()
  };
})(ProfilePage);
