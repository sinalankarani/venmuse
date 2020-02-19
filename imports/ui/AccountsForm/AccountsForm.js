import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Switch,
  withStyles
} from '@material-ui/core/';
import styles from './styles';
import validate from './helpers';
class AccountsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true, //true is sign-in, false is signup
      userTypeToggle: true, //true is venue, false is artist
      error: null
    };
  }
  //signup
  signup = values => {
    const { username, email, password } = values;
    Accounts.createUser(
      {
        username,
        email,
        password,
        profile: {
          userType: this.state.userTypeToggle ? 'venue' : 'artist'
        }
      },
      error => {
        this.setState({ error: error });
        console.log(this.state.error);
      }
    );
  };

  login = values => {
    const { username, password } = values;
    Meteor.loginWithPassword(username, password, error => {
      this.setState({ error: error });
      console.log(this.state.error);
    });
  };

  changeUserType = () => {
    this.setState({ userTypeToggle: !this.state.userTypeToggle });
    console.log(this.state.userTypeToggle);
  };
  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <>
        <Form
          onSubmit={values => {
            this.state.formToggle ? this.login(values) : this.signup(values);
          }}
          validate={validate}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              {!this.state.formToggle && (
                <>
                  <FormControlLabel
                    label={
                      this.state.userTypeToggle === true ? 'Venue' : 'Artist'
                    }
                    control={<Switch onChange={this.changeUserType} />}
                    labelPlacement="top"
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <>
                        <TextField
                          name="email"
                          type="text"
                          placeholder="What's your email?"
                          label="Email"
                          {...input}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  />
                </>
              )}
              <Field
                name="username"
                render={({ input, meta }) => (
                  <>
                    <TextField
                      name="username"
                      type="text"
                      label="User Name"
                      placeholder="What's your username?"
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                  </>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <>
                    <TextField
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="What's your password?"
                      {...input}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                disabled={pristine}
              >
                {this.state.formToggle ? 'Enter' : 'Create Account'}
              </Button>
              <button
                type="button"
                onClick={() =>
                  this.setState({ formToggle: !this.state.formToggle })
                }
              >
                {this.state.formToggle
                  ? 'New to VenMuse? Click here to register.'
                  : 'Already have an account? Click here to sign in.'}
              </button>
            </form>
          )}
        />
        <span>{this.state.error?.reason}</span>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(AccountsForm));
