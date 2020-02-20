import React from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import {
  Card,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Button,
  Typography,
  Box,
  Link
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import Account from "../Account";
import Loader from "../../components/Loader";

const Profile = ({ user, users, userId, event, eventId, classes }) => {
  const [openAccount, setOpenAccount] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState(false);

  const handleOpenAccount = () => {
    setOpenAccount(true);
  };
  const handleOpenEvent = () => {
    setOpenEvent(true);
  };

  const handleClose = () => {
    setOpenAccount(false);
    setOpenEvent(false);
  };
  const preventDefault = event => {
    event.preventDefault();
    console.log("clicked");
  };

  console.log(user);
  return user && user.profile ? (
    <Grid className={classes.profileContainer}>
      <img src={user && user.profile.profileImage} className={classes.banner} />
      <Card className={classes.card}>
        <Box className={classes.idContainer}>
          <Box className={classes.userContainer}>
            {user ? <Gravatar className={classes.gravatar} email={user.emails[0].address} /> : null}
            <Box className={classes.titleLocation}>
              <Typography variant="h4"> {user.profile.title}</Typography>
              <Typography variant="subtitle1">
                {user && user.profile && user.profile.location}
              </Typography>
            </Box>
          </Box>

          {user._id === userId ? (
            <div>
              <Button
                type="button"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleOpenAccount}
              >
                Update Profile{" "}
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openAccount}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={openAccount}>
                  <div className={classes.paper}>
                    <Account />
                  </div>
                </Fade>
              </Modal>
            </div>
          ) : (
            <div>
              <Button
                type="button"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleOpenAccount}
              >
                Message Artist{" "}
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openAccount}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={openAccount}>
                  <div className={classes.paper}></div>
                </Fade>
              </Modal>
            </div>
          )}
        </Box>

        <Typography className={classes.description} variant="body1">
          {user && user.profile && user.profile.description}
        </Typography>
      </Card>
      {user && user.profile && user.profile.social ? (
        <div>
          <Typography variant="h5">Connect with {user.profile.title} on Social Media</Typography>

          <Link
            to={user && user.profile && user.profile.social && user.profile.social.facebook}
            target="_blank"
          >
            <FacebookIcon /> Facebook
          </Link>
          <Link
            to={user && user.profile && user.profile.social && user.profile.social.instagram}
            target="_blank"
          >
            <InstagramIcon /> Instagram
          </Link>
          <Link href={user.profile.social.twitter} onClick={preventDefault} target="_blank">
            <TwitterIcon /> Twitter
          </Link>
        </div>
      ) : null}
      {user.profile.userType === "venue" && user._id === userId ? (
        <div>
          <Button
            type="button"
            variant="contained"
            size="large"
            color="primary"
            onClick={handleOpenEvent}
          >
            Create a New Event
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openEvent}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={openEvent}>
              <div className={classes.paper}>
                <SubmitEvent />
              </div>
            </Fade>
          </Modal>
        </div>
      ) : null}
    </Grid>
  ) : event ? (
    (console.log(event),
    (
      <Grid>
        <img src={event && event.imageurl} className={classes.banner} />
        <Card>
          {user ? <Gravatar className={classes.gravatar} email={user.emails[0].address} /> : null}
          <Typography variant="h4"> {event.title}</Typography>
          <Typography variant="h5" color="primary">
            {event.location}
          </Typography>
          <Typography variant="subtitle1">{event.date}</Typography>
          <Typography variant="body1">{event.description}</Typography>

          {/* {event._id !== eventId ? <Button>Apply to Play</Button> : null} */}
        </Card>
      </Grid>
    ))
  ) : (
    <Loader />
  );
};

export default withTracker(({ userId, eventId }) => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");

  return {
    pastEvents: Events.find({ owner: Meteor.userId() }).fetch(),
    event: Events.find({ _id: eventId }).fetch()[0],
    users: Meteor.users.find().fetch(),
    user: Meteor.users.find({ _id: userId }).fetch()[0],
    userId: Meteor.userId()
  };
})(withStyles(styles)(Profile));
