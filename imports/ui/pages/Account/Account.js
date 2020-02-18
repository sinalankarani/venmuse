import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Typography, Button } from "@material-ui/core";
import EditableLabel from "../../components/EditableLabel";
import { Form, Field } from "react-final-form";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this._handleFocus = this._handleFocus.bind(this);
    this._handleFocusOut = this._handleFocusOut.bind(this);
  }
  _handleFocus(text) {
    console.log("Current text: " + text);
  }
  _handleFocusOut(text) {
    console.log("Updated text: " + text);
  }
  captureValues = values => {
    console.log(values);
  };

  render() {
    console.log(this.props);
    console.log(this.props.user);

    return (
      <Form
        initialValues={{
          username: this.props.user?.username,
          location: this.props.user?.profile?.location,
          emails: this.props.user?.emails[0].address,
          description: this.props.user?.profile?.description,
          // social: this.props.user?.profile?.social[0],
          // social: this.props.user?.profile?.social[1]

          // the question mark - nullish coalescing google please
        }}
        onSubmit={values => {
          this.captureValues(values);
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>account page</h1>
            {/* USERNAME */}
            <Field
              name="username"
              render={({ input }) => (
                <EditableLabel
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                  {...input}
                />
              )}
            />
            {/* USERTYPE */}
            <Typography>
              YOU ARE: {this.props.user && this.props.user.profile.userType}
            </Typography>
            {/* LOCATION */}
            <Field
              name="location"
              render={({ input }) => (
                <EditableLabel
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                  {...input}
                />
              )}
            />
            {/* PROFILE IMAGE */}
            <Typography>
              {/* PROFILE IMAGE:{" "}
              <img
                src={this.props.user && this.props.user.profile.profileImage}
              /> */}
            </Typography>
            {/* EMAIL */}
            <Field
              name="emails"
              render={({ input }) => (
                <EditableLabel
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                  {...input}
                />
              )}
            />
            {/* DESCRIPTION */}
            <Field
              name="description"
              render={({ input }) => (
                <EditableLabel
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                  {...input}
                />
              )}
            />
            {/* SOCIAL MEDIA */}
            {/* <Field
              name="social"
              render={({ input }) => (
                <EditableLabel
                  labelClassName="myLabelClass"
                  inputClassName="myInputClass"
                  inputWidth="200px"
                  inputHeight="25px"
                  onFocus={this._handleFocus}
                  onFocusOut={this._handleFocusOut}
                  {...input}
                />
              )}
            /> */}
            <Button type="submit">Save</Button>
          </form>
        )}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    user: Meteor.user()
  };
})(Account);
