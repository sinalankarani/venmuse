import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { Card, Grid, Modal, Backdrop, Fade, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import Loader from "../../components/Loader";

const Profile = ({ user, users, userId, events, classes }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return user && user.profile ? (
    <Grid>
      {console.log(userId)}
      {console.log(user._id)}
      {console.log(events)}
      <img src={user && user.profile.profileImage} className={classes.banner} />
      <Card>
        <Gravatar className={classes.gravatar} email={user.emails[0].address} />
        <h1> {user.username}</h1>
        <p>{user && user.profile && user.profile.location}</p>
        <p>{user && user.profile && user.profile.description}</p>
        {user._id === userId ? (
          <Button
            type="button"
            variant="contained"
            size="large"
            color="primary"
            onClick={handleOpen}
          >
            Update Profile{" "}
          </Button>
        ) : null}
      </Card>
      {user && user.profile && user.profile.social ? (
        <div>
          <h2>Connect with us on Social Media</h2>

          <p key="facebook">
            <a href={user.profile.social.facebook} target="_blank">
              <FacebookIcon />
            </a>
          </p>
          <p key="instagram">
            <a href={user.profile.social.instagram}>
              <InstagramIcon />
            </a>
          </p>
          <p key="twitter">
            <a href={user.profile.social.twitter}>
              <TwitterIcon />
            </a>
          </p>
        </div>
      ) : null}
      {user.profile.userType === "venue" ? (
        <div>
          <Button
            type="button"
            variant="contained"
            size="large"
            color="primary"
            onClick={handleOpen}
          >
            Create a New Event
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <SubmitEvent />
              </div>
            </Fade>
          </Modal>
        </div>
      ) : null}
    </Grid>
  ) : (
    <Loader />
  );
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
})(withStyles(styles)(Profile));
