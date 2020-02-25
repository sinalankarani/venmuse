import React from "react";
import { Form, Field } from "react-final-form";
import { Container, TextField, Input, Typography, Button } from "@material-ui/core";
import { useParams, Redirect } from "react-router-dom";

import { withTracker } from "meteor/react-meteor-data";

const Follow = ({ followedUser }) => {
  const addFollower = () => {
    Meteor.call("users.updateFollowers", followedUser);
    console.log(followedUser);
    console.log(Meteor.userId());
  };
  return (
    <Container>
      <Typography>You have successfully followed this artist/venue.</Typography>
      <Button type="submit" onClick={addFollower} variant="contained" size="large" color="primary">
        OK
      </Button>
    </Container>
  );
};

export default Follow;
