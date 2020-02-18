import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import { Card, Grid } from "@material-ui/core";

const Single = ({ users, events }) => (
  <Grid>
    <Card>
      <img src={users && users.profile.profileImage} />
      <h1> {users && users && users.username}</h1>
      <p>{users && users.profile.location}</p>
      <p>{users && users.profile.description}</p>
      {/* {users &&
        users.profile.social.map(social => {
          return <p>{social}</p>;
        })} */}
    </Card>
    {console.log(users)}
    {users && users.profile.userType === "venue" ? (
      <SubmitEvent /> //also events listed
    ) : null}
  </Grid>
);

export default withTracker(({ id }) => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");
  console.log("id", id);

  return {
    events: Events.find({}).fetch(),
    users: Meteor.users.findOne({ _id: id })
  };
})(Single);
