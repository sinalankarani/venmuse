import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";
import {
  Button,
  FormControl,
  Grid,
  Input,
  FormControlLabel,
  Switch,
  withStyles
} from "@material-ui/core/";

class AccountsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true, //true is sign-in, false is signup
      userTypeToggle: true //true is venue, false is artist
    };
  }
  //signup
  signup = () => {
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    let userType;
    if (this.state.userTypeToggle === false) {
      console.log(this.state.userTypeToggle);
      userType = "artist";
    } else {
      console.log(this.state.userTypeToggle);
      userType = "venue";
    }
    Accounts.createUser(
      {
        username,
        email,
        password,
        profile: {
          userType
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  login = () => {
    const username = event.target.username.value;
    const password = event.target.password.value;
    Meteor.loginWithPassword(username, password, error => {
      console.log(error);
    });
    console.log(Meteor.userId(), "logged in");
  };

  changeUserType = () => {
    this.setState({ userTypeToggle: !this.state.userTypeToggle });
    console.log(this.state.userTypeToggle);
  };
  render() {
    return (
      <div className="AccountsFormContainer">
        <Form
          onSubmit={this.state.formToggle ? this.login : this.signup}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <form onSubmit={handleSubmit}>
              {!this.state.formToggle ? (
                <div>
                  <FormControlLabel
                    label={this.state.userTypeToggle === true ? "Venue" : "Artist"}
                    control={
                      <Switch
                        //   checked={this.state.userTypeToggle}
                        onChange={this.changeUserType}
                      />
                    }
                  />
                  <Input name="email" type="text" placeholder="What's your email?" />
                </div>
              ) : null}
              <Input name="username" type="text" placeholder="What's your username?" />

              <Input name="password" type="password" placeholder="What's your password?" />

              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                // disabled={pristine || invalid}
              >
                {this.state.formToggle ? "Enter" : "Create Account"}
              </Button>
              <button
                type="button"
                onClick={() => this.setState({ formToggle: !this.state.formToggle })}
              >
                {this.state.formToggle
                  ? "New to VenMuse? Click here to register!"
                  : "Already have an account? Click here to sign in!"}
              </button>
            </form>
          )}
        ></Form>
      </div>
    );
  }
}

export default AccountsForm;
