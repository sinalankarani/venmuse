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
  Box
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import Account from "../Account";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import EventsCard from "../../components/EventsCard";
import ArtistCard from "../../components/ArtistCard";

import Notification from "../../components/Notification/Notification";

const Profile = ({
  user,
  users,
  userId,
  event,
  myEvents,
  eventId,
  classes
}) => {
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
  };

  const applyEvent = () => {
    Meteor.call("events.applyToEvent", event, (err, res) => {
      if (err) {
        alert(err.reason);
      }
    });
  };
  const approveArtist = artistApplied => {
    Meteor.call("events.approveArtist", event, artistApplied, (err, res) => {
      if (err) {
        alert(err.reason);
      }
    });
  };

  const removeArtist = artistApplied => {
    Meteor.call("events.removeArtist", event, artistApplied, (err, res) => {
      if (err) {
        alert(err.reason);
      }
    });
  };

  return user && user.profile ? (
    <Grid className={classes.profileContainer}>
      <Notification />
      <img src={user && user.profile.profileImage} className={classes.banner} />
      <Card className={classes.card}>
        <Box className={classes.idContainer}>
          <Box className={classes.userContainer}>
            {user ? (
              <Gravatar
                className={classes.gravatar}
                email={user.emails[0].address}
              />
            ) : null}
            <Box className={classes.titleLocation}>
              <Typography variant="h4"> {user.profile.title}</Typography>
              <Typography variant="subtitle1" color="primary">
                {user && user.profile && user.profile.location}
              </Typography>
              <Typography variant="body1">
                {user && user.profile && user.profile.description}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.buttonsContainer}>
            {user._id === userId ? (
              <div>
                <Button
                  className={classes.button}
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
                  className={classes.button}
                  type="button"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleOpenAccount}
                >
                  {user.profile.userType === "artist"
                    ? "Message Artist"
                    : "Message Venue"}
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
            {user.profile.userType === "venue" && user._id === userId ? (
              <div>
                <Button
                  className={classes.button}
                  type="button"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleOpenEvent}
                >
                  Create New Event
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
                      <SubmitEvent handleClose={handleClose} />
                    </div>
                  </Fade>
                </Modal>
              </div>
            ) : null}
          </Box>
        </Box>
      </Card>
      {user && user.profile && user.profile.social ? (
        <Box className={classes.social}>
          <Typography variant="h5">
            Connect with {user.profile.title} on Social Media
          </Typography>
          <Box className={classes.socialLinks}>
            {user?.profile?.social?.facebook && (
              <Link
                className={classes.link}
                to={user?.profile?.social?.facebook}
                target="_blank"
              >
                <FacebookIcon className={classes.icon} /> Facebook
              </Link>
            )}
            {user?.profile?.social?.instagram && (
              <Link
                className={classes.link}
                to={user?.profile?.social?.instagram}
                target="_blank"
              >
                <InstagramIcon className={classes.icon} /> Instagram
              </Link>
            )}
            {user?.profile?.social?.twitter && (
              <Link
                className={classes.link}
                to={user?.profile?.social?.twitter}
                onClick={preventDefault}
                target="_blank"
              >
                <TwitterIcon className={classes.icon} /> Twitter
              </Link>
            )}
          </Box>
        </Box>
      ) : null}
      <Grid container spacing={2} className={classes.eventContainer}>
        {myEvents.map(event => (
          <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
            <EventsCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  ) : event ? (
    <Grid className={classes.profileContainer}>
      <img src={event && event.imageurl} className={classes.banner} />
      <Card className={classes.eventCard}>
        <Box>
          <Typography variant="h4"> {event.title}</Typography>
          <Typography variant="h5" color="primary">
            {event.location}
          </Typography>
          <Typography variant="subtitle1">{event.date}</Typography>
          <Typography variant="body1">{event.description}</Typography>
        </Box>
        {event.owner !== userId ? (
          !event.filled ? (
            <Button
              className={classes.button}
              type="button"
              variant="contained"
              size="large"
              color="primary"
              onClick={applyEvent}
            >
              Apply to Event
            </Button>
          ) : (
            <Typography variant="h5" color="primary">
              Lineup Filled
            </Typography>
          )
        ) : null}
      </Card>
      {event.owner === userId
        ? (console.log(event.artistApplied),
          event.artistApplied.map(
            appliedArtist => (
              console.log(appliedArtist),
              console.log(Meteor.users.find({ _id: appliedArtist }).fetch()),
              (
                <div key={appliedArtist}>
                  <ArtistCard
                    artist={
                      Meteor.users.find({ _id: appliedArtist }).fetch()[0]
                    }
                  />
                  <Button
                    onClick={() => {
                      approveArtist(appliedArtist);
                    }}
                  >
                    Accept Application
                  </Button>
                  <Button
                    onClick={() => {
                      removeArtist(appliedArtist);
                    }}
                  >
                    Reject
                  </Button>
                </div>
              )
            )
          ))
        : null}
    </Grid>
  ) : (
    <Loader />
  );
};

export default withTracker(({ userId, eventId }) => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");

  return {
    myEvents: Events.find({ owner: userId }).fetch(),
    event: Events.find({ _id: eventId }).fetch()[0],
    users: Meteor.users.find().fetch(),
    user: Meteor.users.find({ _id: userId }).fetch()[0],
    userId: Meteor.userId()
  };
})(withStyles(styles)(Profile));
