import React from 'react';
import EventsContainer from '../../containers/EventsContainer';
import { withStyles, Typography, Container } from '@material-ui/core';
import styles from './styles';

const Event = ({ classes }) => {
  return (
    <div className={classes.eventPage}>
      <Container className={classes.banner}>
        <Typography className={classes.bannertext}>EVENTS</Typography>
        <img className={classes.bannerimage} src="/images/event.jpg" />
      </Container>
      <EventsContainer />
    </div>
  );
};

export default withStyles(styles)(Event);
