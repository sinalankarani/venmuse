import React, { Fragment } from "react";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { Card, Grid, Modal, Backdrop, Fade, Button, Typography, Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import Account from "../Account";
import Loader from "../../components/Loader";
import EventsCard from "../../components/EventsCard";
import ArtistCard from "../../components/ArtistCard";
import Notification from "../../components/Notification/Notification";
import Follow from "../../components/Follow";

const Profile = ({
  currentUser,
  user,
  userId,
  event,
  myEvents,
  appliedEvents,
  upcomingEvents,
  classes
}) => {
  const [openAccount, setOpenAccount] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState(false);
  const [openFollow, setOpenFollow] = React.useState(false);

  const handleOpenAccount = () => {
    setOpenAccount(true);
  };
  const handleOpenEvent = () => {
    setOpenEvent(true);
  };
  const handleOpenFollow = () => {
    setOpenFollow(true);
  };

  const handleClose = () => {
    setOpenAccount(false);
    setOpenEvent(false);
    setOpenFollow(false);
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
  const cancelApplication = () => {
    Meteor.call("events.cancelApplication", event, (err, res) => {
      if (err) {
        alert(err.reason);
      }
    });
  };

  const removeEvent = event => {
    Meteor.call("events.removeEvent", event, (err, res) => {
      if (err) {
        alert(err.reason);
      }
    });
  };

  const filterAppliedEvents = () => {
    return appliedEvents.filter(event => event.artistApplied?.includes(userId));
  };

  const apiKey = "get your own key";

  return user?.profile ? (
    <Grid className={classes.profileContainer}>
      <Notification />
      <img src={user?.profile?.profileImage} className={classes.banner} />
      <Card className={classes.card}>
        <Box className={classes.idContainer}>
          <Box className={classes.userContainer}>
            {user ? <Gravatar className={classes.gravatar} email={user.emails[0].address} /> : null}
            <Box className={classes.titleLocation}>
              <Typography className={classes.titleLabel} variant="h4">
                {" "}
                {user.profile.title || "[Title Placeholder]"}
              </Typography>
              <Typography className={classes.userType}>
                usertype <span className={classes.divider}>|</span> {user?.profile?.userType}
              </Typography>

              <Typography variant="subtitle1" color="secondary">
                {user?.profile?.location || "[Location Placeholder]"}
              </Typography>
              <Typography variant="body1" color="secondary" className={classes.description}>
                {user?.profile?.description ||
                  "[Description Placeholder: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id aliquet urna. Donec iaculis eu nunc a tempor. In quis feugiat diam, nec auctor mauris. In convallis purus ligula, at ultricies metus aliquet et. Cras libero leo, sollicitudin nec lacus eu, egestas convallis massa. Suspendisse commodo sodales ante lacinia pretium. Phasellus sem nulla, imperdiet nec aliquet non, viverra a dolor. Cras et ipsum felis. In imperdiet diam eget malesuada euismod. Etiam bibendum et felis a scelerisque. Sed posuere tellus ac rutrum fermentum. Duis nisl velit, laoreet scelerisque pretium at, mollis et ante. Nam id mattis dui. Praesent fermentum elementum luctus. Donec facilisis iaculis sodales. Duis consequat vulputate varius]"}
              </Typography>
              {user?.profile?.location && user.profile.userType === "venue" && (
                <Box className={classes.googleMap}>
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?&markers=${user.profile.location}&size=400x300&zoom=15&&key=${apiKey}`}
                  />
                </Box>
              )}
            </Box>
          </Box>
          {/* UPDATE PROFILE AS USER */}
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
                  Update Profile
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
                      <Account handleClose={handleClose} />
                    </div>
                  </Fade>
                </Modal>
              </div>
            ) : (
              // MESSAGE USER
              <div>
                <Button
                  className={classes.button}
                  type="button"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleOpenFollow}
                >
                  {user.profile.userType === "artist" ? "Follow Artist" : "Follow Venue"}
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openFollow}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500
                  }}
                >
                  <Fade in={openFollow}>
                    <div className={classes.paper}>
                      <Follow handleClose={handleClose} />
                    </div>
                  </Fade>
                </Modal>
              </div>
            )}
            {/* CREATE NEW EVENT AS A VENUE */}
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
      {user?.profile?.social ? (
        <Box className={classes.social}>
          <Typography variant="h5">Connect with {user.profile.title} on Social Media</Typography>
          <Box className={classes.socialLinks}>
            {user?.profile?.social?.facebook && (
              <a className={classes.link} href={user?.profile?.social?.facebook} target="_blank">
                <FacebookIcon className={classes.icon} /> Facebook
              </a>
            )}
            {user?.profile?.social?.instagram && (
              <a className={classes.link} href={user?.profile?.social?.instagram} target="_blank">
                <InstagramIcon className={classes.icon} /> Instagram
              </a>
            )}
            {user?.profile?.social?.twitter && (
              <a className={classes.link} href={user?.profile?.social?.twitter} target="_blank">
                <TwitterIcon className={classes.icon} /> Twitter
              </a>
            )}
          </Box>
        </Box>
      ) : null}
      {myEvents.length && user.profile.userType === "venue" ? (
        <div className={classes.myEventsContainer}>
          <Typography className={classes.myEventsTitle}>My Events</Typography>
          <Grid container spacing={2} className={classes.eventContainer}>
            {myEvents.map(event => (
              <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
                <EventsCard event={event} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
      {appliedEvents.length && user.profile.userType === "artist" ? (
        <div className={classes.myEventsContainer}>
          {filterAppliedEvents().length > 0 && (
            <Typography className={classes.myEventsTitle}>My Applied Events</Typography>
          )}
          {console.log(filterAppliedEvents())}
          <Grid container spacing={2} className={classes.eventContainer}>
            {filterAppliedEvents().map(event => (
              <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
                <EventsCard event={event} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
      {/* Events the Artist is performing at */}
      {user._id === userId ? (
        <Grid container spacing={2} className={classes.eventContainer}>
          {upcomingEvents?.map(event => (
            <Fragment key={event._id}>
              {event?.lineup?.map(artistId =>
                artistId == userId ? (
                  <Grid item key={event._id} xs={12} sm={6} md={4} lg={3}>
                    <EventsCard event={event} />
                  </Grid>
                ) : null
              )}
            </Fragment>
          ))}
        </Grid>
      ) : null}
    </Grid>
  ) : event ? (
    // APPLY TO EVENTS
    <Grid className={classes.profileContainer}>
      <img src={event?.imageurl} className={classes.banner} />
      <Card className={classes.eventCard}>
        <Box>
          <Typography variant="h4"> {event.title}</Typography>
          <Typography variant="h5" color="primary">
            {event.location}
          </Typography>
          <Typography variant="subtitle1">{event.date}</Typography>
          <Typography className={classes.description} variant="body1">
            {event.description}
          </Typography>
          {event?.location && (
            <Box className={classes.googleMap}>
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?&markers=${event?.location}&size=400x300&zoom=15&&key=${apiKey}`}
              />
            </Box>
          )}
        </Box>
        {event.owner !== userId && currentUser.profile.userType === "artist" ? (
          !event.filled ? (
            event?.artistApplied?.includes(userId) ? (
              <Button
                className={classes.button}
                type="button"
                variant="contained"
                size="large"
                color="secondary"
                onClick={cancelApplication}
              >
                Cancel Application
              </Button>
            ) : (
              <Button
                className={classes.button}
                type="button"
                variant="contained"
                size="large"
                color="primary"
                onClick={applyEvent}
              >
                Apply now
              </Button>
            )
          ) : (
            <Typography variant="h5" color="primary">
              Lineup Filled
            </Typography>
          )
        ) : null}
      </Card>
      {/* REMOVE EVENT AS VENUE */}
      {event.owner === userId ? (
        <Button
          onClick={() => {
            removeEvent(event);
          }}
          className={classes.button}
          type="button"
          variant="contained"
          size="medium"
          color="primary"
        >
          Cancel Event
        </Button>
      ) : null}
      <br />
      <br />
      {/* ACCEPT OR REJECT APPLICATION TO YOUR EVENT */}
      {event.owner === userId
        ? event.artistApplied.map(appliedArtist => (
            <div key={appliedArtist}>
              <Typography variant="h5" color="secondary">
                Artist Applications:
              </Typography>
              <ArtistCard artist={Meteor.users.find({ _id: appliedArtist }).fetch()[0]} />

              <Button
                className={classes.button}
                onClick={() => {
                  approveArtist(appliedArtist);
                }}
                className={classes.button}
                type="button"
                variant="contained"
                size="medium"
                color="primary"
              >
                Accept Artist
              </Button>
              <Button
                className={classes.button}
                onClick={() => {
                  removeArtist(appliedArtist);
                }}
                className={classes.button}
                type="button"
                variant="contained"
                size="medium"
                color="primary"
              >
                Reject Artist
              </Button>
            </div>
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
    appliedEvents: Events.find({}).fetch(),
    upcomingEvents: Events.find({}).fetch(),
    myEvents: Events.find({ owner: userId }).fetch(),
    event: Events.find({ _id: eventId }).fetch()[0],
    users: Meteor.users.find().fetch(),
    user: Meteor.users.find({ _id: userId }).fetch()[0],
    userId: Meteor.userId(),
    currentUser: Meteor.user()
  };
})(withStyles(styles)(Profile));
