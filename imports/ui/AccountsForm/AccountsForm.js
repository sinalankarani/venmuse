import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  Input,
  TextField,
  FormControlLabel,
  Switch,
  withStyles
} from "@material-ui/core/";
import { style } from "@material-ui/system";
import styles from "./styles";

class AccountsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true, //true is sign-in, false is signup
      userTypeToggle: true //true is venue, false is artist
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
          userType: this.state.userTypeToggle ? "venue" : "artist"
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  login = values => {
    const { username, password } = values;
    Meteor.loginWithPassword(username, password, error => {
      console.log(error);
    });
  };

  changeUserType = () => {
    this.setState({ userTypeToggle: !this.state.userTypeToggle });
    console.log(this.state.userTypeToggle);
  };
  render() {
    return (
      <div className="AccountsFormContainer">
        <Form
          onSubmit={values => {
            this.state.formToggle ? this.login(values) : this.signup(values);
          }}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <form onSubmit={handleSubmit}>
              {!this.state.formToggle ? (
                <React.Fragment>
                  <FormControlLabel
                    label={this.state.userTypeToggle === true ? "Venue" : "Artist"}
                    control={<Switch onChange={this.changeUserType} />}
                    labelPlacement="top"
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <React.Fragment>
                        <TextField
                          name="email"
                          type="text"
                          placeholder="What's your email?"
                          label="Email"
                          {...input}
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </React.Fragment>
                    )}
                  />
                </React.Fragment>
              ) : null}
              <Field
                name="username"
                render={({ input, meta }) => (
                  <React.Fragment>
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
                  </React.Fragment>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="What's your password?"
                      {...input}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />

              <Button type="submit" variant="contained" size="large" color="primary">
                {this.state.formToggle ? "Enter" : "Create Account"}
              </Button>
              <button
                type="button"
                onClick={() => this.setState({ formToggle: !this.state.formToggle })}
              >
                {this.state.formToggle
                  ? "New to VenMuse? Click here to register."
                  : "Already have an account? Click here to sign in."}
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(AccountsForm));
