import { useParams, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React from "react";
import Follow from "./Follow";
const FollowWrapper = props => {
  let { id } = useParams();
  console.log(id);
  return <Follow followedUser={id} />;
};

export default FollowWrapper;
