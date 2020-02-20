import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";
import {
  Button,
  Box,
  Card,
  Zoom,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core/";
import styles from "./styles";
import validate from "./helpers";
import StoreIcon from "@material-ui/icons/Store";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PropTypes from "prop-types";

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
          userType: this.state.userTypeToggle ? "venue" : "artist"
        }
      },
      error => {
        this.setState({ error: error });
      }
    );
  };

  login = values => {
    const { username, password } = values;
    Meteor.loginWithPassword(username, password, error => {
      this.setState({ error: error });
    });
  };

  changeUserType = () => {
    this.setState({ userTypeToggle: !this.state.userTypeToggle });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.formContainer}>
        {!this.state.formToggle ? (
          this.state.userTypeToggle ? (
            <Zoom in={this.state.userTypeToggle} timeout={300}>
              <StoreIcon className={classes.icon} />
            </Zoom>
          ) : (
            <Zoom in={!this.state.userTypeToggle} timeout={300}>
              <MusicNoteIcon className={classes.icon} />
            </Zoom>
          )
        ) : null}
        <Form
          onSubmit={values => {
            this.state.formToggle ? this.login(values) : this.signup(values);
          }}
          validate={values => validate(values, this.state.formToggle)}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Box className={classes.fields}>
                {!this.state.formToggle ? (
                  <>
                    <FormControlLabel
                      label={
                        this.state.userTypeToggle === true ? "VENUE" : "ARTIST"
                      }
                      control={<Switch onChange={this.changeUserType} />}
                      labelPlacement="top"
                    />
                    <Field
                      name="email"
                      render={({ input, meta }) => (
                        <div className={classes.inputContainer}>
                          <TextField
                            name="email"
                            type="text"
                            placeholder="WHAT'S YOUR EMAIL?"
                            label="EMAIL"
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <span className={classes.error}>{meta.error}</span>
                          )}
                        </div>
                      )}
                    />
                  </>
                ) : (
                  <Typography variant="h4" className={classes.title}>
                    Sign in{" "}
                  </Typography>
                )}
                <Field
                  name="username"
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        name="username"
                        type="text"
                        label="USERNAME"
                        placeholder="WHAT'S YOUR USERNAME"
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span
                          className={classes.error}
                          className={classes.error}
                        >
                          {meta.error}
                        </span>
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
                        label="PASSWORD"
                        placeholder="WHAT'S YOUR PASSWORD"
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={classes.error}>{meta.error}</span>
                      )}
                    </>
                  )}
                />
              </Box>
              <span className={classes.error}>{this.state.error?.reason}</span>
              <Box className={classes.buttonContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  disabled={pristine}
                  className={classes.button}
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Button
                  className={classes.button}
                  type="button"
                  onClick={() =>
                    this.setState({
                      formToggle: !this.state.formToggle,
                      error: null
                    })
                  }
                >
                  {this.state.formToggle
                    ? "New to VenMuse? Register"
                    : "Sign in"}
                </Button>
              </Box>
            </form>
          )}
        />
      </Card>
    );
  }
}

AccountsForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string
};

export default withStyles(styles)(withRouter(AccountsForm));
