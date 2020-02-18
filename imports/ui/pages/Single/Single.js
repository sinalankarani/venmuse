import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import { Artists } from "../../../api";
import { Venues } from "../../../api";

const Single = ({ events }) => {
  console.log(events);
  return (
    <div>
      <h1>single page</h1>
      <SubmitEvent />
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    events: Events.find({}).fetch(),
    artists: Meteor.users.find({}).fetch(),
    venues: Meteor.users.find({}).fetch()
  };
})(Single);
