import React from 'react';
import { Form, Field } from 'react-final-form';
import validate from './helpers/validation';
import { Meteor } from 'meteor/meteor';
import styles from './styles';
import {
  Button,
  Card,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';
import moment from 'moment';

const SubmitEvent = ({ classes }) => {
  const onSubmit = values => {
    const newEvent = {
      date: values.date,
      created: moment()
        .startOf()
        .fromNow(),
      title: values.title,
      /////THIS NEEDS TO BE VENUE TITLE
      location: 'Da club',
      /////////////////////////////////
      description: ''
    };
    Meteor.call('events.addNewEvent', newEvent);
  };

  return (
    <Card className={classes.formContainer}>
      <Typography variant="h4">Submit New Event</Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate.bind(this)}
        render={({ handleSubmit, form, pristine }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.form}>
              {/* EVENT TITLE */}
              <Field
                name="title"
                type="text"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      label="Title"
                      className={classes.fields}
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                  </React.Fragment>
                )}
              />

              {/* EVENT DESCRIPTION */}
              <Field
                name="description"
                type="text"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      label="Description"
                      className={classes.fields}
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                  </React.Fragment>
                )}
              />

              {/* EVENT DATE */}
              <Field
                name="date"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      className={classes.fields}
                      id="date"
                      label="Date"
                      type="date"
                      {...input}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                    {meta.error && meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                  </React.Fragment>
                )}
              />
              {/* SUBMIT NEW EVENT */}
              <Button onClick={handleSubmit} variant="contained">
                Submit
              </Button>
            </form>
          );
        }}
      />
    </Card>
  );
};

export default withStyles(styles)(SubmitEvent);
// - id
// -due date (event date)
// - date created
// - title
// -desc
// -Venue.location (Google Maps iframe)
// - Venue.id
// - imageurl
// -Artist.id []
