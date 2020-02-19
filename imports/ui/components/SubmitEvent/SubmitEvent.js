import React from 'react';
import { Events } from '../../../api/';
import { Form, Field } from 'react-final-form';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import validate from './helpers/';
import { Meteor } from 'meteor/meteor';
import styles from './styles';
import {
  Button,
  Card,
  TextField,
  Typography,
  withStyles,
  MenuItem,
  Checkbox,
  ListItemText,
  Select,
  FormControl,
  InputLabel,
  Input
} from '@material-ui/core';
import moment from 'moment';

class SubmitEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = values => {
    const newEvent = {
      date: values.date,
      created: moment()
        .startOf()
        .fromNow(),
      title: values.title,
      location: this.props.user?.profile?.location
        ? this.props.user.profile.location
        : values.location,
      description: values.description,
      tags: values.tags
    };
    Meteor.call('events.addNewEvent', newEvent);
    this.props.history.push('/feed');
  };

  render() {
    const { classes } = this.props;
    const tags = [
      'Blues',
      'Classical',
      'Comedy',
      'Country',
      'Dance Performance',
      'Electronic',
      'Folk',
      'Hip hop',
      'Indie',
      'Jazz',
      'Musical Theatre',
      'Metal',
      'Pop',
      'Punk',
      'R&B',
      'Rap',
      'Reggae',
      'Rock',
      'Top 40'
    ];
    return (
      <Card className={classes.formContainer}>
        <Typography variant="h4">Submit New Event</Typography>
        <Form
          onSubmit={this.onSubmit}
          validate={validate}
          initialValues={{ tags: [] }}
          render={({ handleSubmit, form, pristine }) => {
            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                {/* EVENT TITLE */}
                <Field
                  name="title"
                  type="text"
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        label="Title"
                        className={classes.fields}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={classes.error}>{meta.error}</span>
                      )}
                    </>
                  )}
                />
                {/* EVENT LOCATION */}

                {!this.props.user?.profile?.location && (
                  <Field
                    name="location"
                    type="text"
                    render={({ input, meta }) => (
                      <>
                        <TextField
                          label="Location"
                          className={classes.fields}
                          {...input}
                        />
                        {meta.error && meta.touched && (
                          <span className={classes.error}>{meta.error}</span>
                        )}
                      </>
                    )}
                  />
                )}

                {/* EVENT DESCRIPTION */}
                <Field
                  name="description"
                  type="text"
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        label="Description"
                        className={classes.fields}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={classes.error}>{meta.error}</span>
                      )}
                    </>
                  )}
                />

                {/* EVENT DATE */}
                <Field
                  name="date"
                  render={({ input, meta }) => (
                    <>
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
                    </>
                  )}
                />

                {/* EVENT TAGS */}
                <Field
                  name="tags"
                  className={classes.fields}
                  render={({ input, meta }) => (
                    <>
                      <FormControl className={classes.fields}>
                        <InputLabel>Tags</InputLabel>
                        <Select
                          multiple
                          input={<Input />}
                          renderValue={selected => selected.join(', ')}
                          {...input}
                        >
                          {tags.map(tag => (
                            <MenuItem key={tag} value={tag}>
                              <Checkbox
                                checked={input.value.indexOf(tag) > -1}
                              />
                              <ListItemText primary={tag} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {meta.error && meta.touched && (
                        <span className={classes.error}>{meta.error}</span>
                      )}
                    </>
                  )}
                />

                {/* SUBMIT NEW EVENT */}
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        />
      </Card>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('events');
  Meteor.subscribe('users');
  return {
    events: Events.find({}).fetch(),
    userId: Meteor.userId(),
    user: Meteor.user()
  };
})(withStyles(styles)(withRouter(SubmitEvent)));
