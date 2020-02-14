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

class AccountsWrapper extends Component {
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
    const email = event.target.email.value;
    const password = event.target.password.value;
    Meteor.loginWithPassword(email, password, error => {
      console.log(error);
    });
  };

  changeUserType = () => {
    this.setState({ userTypeToggle: !this.state.userTypeToggle });
    console.log(this.state.userTypeToggle);
  };
  render() {
    return (
      <div className="accountsWrapperContainer">
        <Form
          onSubmit={this.signup}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <form onSubmit={handleSubmit}>
              <Input name="username" type="text" placeholder="What's your username?" />
              <Input name="email" type="text" placeholder="What's your email?" />
              <Input name="password" type="password" placeholder="What's your password?" />
              <FormControlLabel
                label={this.state.userTypeToggle === true ? "Venue" : "Artist"}
                control={
                  <Switch
                    //   checked={this.state.userTypeToggle}
                    onChange={this.changeUserType}
                  />
                }
              />
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
                {this.state.formToggle ? "Sign In" : "Register"}
              </button>
            </form>
          )}
        ></Form>
      </div>
    );
  }
}

export default AccountsWrapper;
