import React from "react";
import { useParams } from "react-router-dom";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import { Artists } from "../../../api";
import { Venues } from "../../../api";
import Profile from "./Profile";

const ProfilePage = props => {
  let { id } = useParams();

  return <Profile userId={id} eventId={id} />;
};

export default ProfilePage;
