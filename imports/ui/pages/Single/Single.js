import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import { Card, Grid } from "@material-ui/core";
import { Meteor } from "meteor/meteor";

const Single = ({ user }) => {
  return user && user.profile ? (
    <Grid>
      {console.log(user)}
      <Card>
        <img src={user && user.profile.profileImage} />
        <h1> {user.username}</h1>
        <p>{user.profile.location}</p>
        <p>{user.profile.description}</p>
        {console.log(user.profile.social.facebook)}
        <h2>Connect with us on Social Media</h2>
        <ul>
          <li key="facebook">
            <a href={user.profile.social.facebook} target="_blank">
              Facebook Icon
            </a>
          </li>
          <li key="instagram">
            <a href={user.profile.social.instagram}>Instagram Icon</a>
          </li>
          <li key="twitter">
            <a href={user.profile.social.twitter}>Twitter Icon</a>
          </li>
        </ul>
      </Card>
      {user.profile.userType === "venue" ? (
        <SubmitEvent /> //also events listed
      ) : null}
    </Grid>
  ) : null;
};

export default withTracker(({ userId }) => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");

  return {
    events: Events.find({}).fetch(),
    user: Meteor.users.find({ _id: userId }).fetch()[0]
  };
})(Single);
