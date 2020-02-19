import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import {
  Card,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { Meteor } from "meteor/meteor";

const Single = ({ user, users, events }) => {
  return user && user.profile ? (
    <Grid>
      {console.log(user)}
      {console.log(users)}
      {console.log(events)}
      <Card>
        <img src={user && user.profile.profileImage} />
        <h1> {user.username}</h1>
        <p>{user.profile.location}</p>
        <p>{user.profile.description}</p>
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
        <ExpansionPanel>
          <SubmitEvent /> //also events listed
        </ExpansionPanel>
      ) : null}
    </Grid>
  ) : null;
};

export default withTracker(({ userId }) => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");

  return {
    events: Events.find({ owner: Meteor.userId() }).fetch(),
    users: Meteor.users.find().fetch(),
    user: Meteor.users.find({ _id: userId }).fetch()[0],
    userId: Meteor.userId()
  };
})(withStyles(styles)(Single));
