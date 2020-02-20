import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Typography, Button, TextField } from "@material-ui/core";
import { Form, Field } from "react-final-form";

class Account extends React.Component {
  render() {
    console.log(this.props.user);

    return (
      <Form
        initialValues={{
          username: this.props.user?.username,
          location: this.props.user?.profile?.location,
          email: this.props.user?.emails[0].address,
          description: this.props.user?.profile?.description,
          facebook: this.props.user?.profile?.social?.facebook
            ? this.props.user?.profile?.social?.facebook
            : "Please enter Facebook URL",
          instagram: this.props.user?.profile?.social?.instagram
            ? this.props.user?.profile?.social?.instagram
            : "Please enter Instagram URL",
          twitter: this.props.user?.profile?.social?.twitter
            ? this.props.user?.profile?.social?.twitter
            : "Please enter Twitter URL"
          // the question mark - nullish coalescing google please
        }}
        onSubmit={values => {
          console.log(values);
          const updatedProfile = {
            profile: {
              location: values.location,
              description: values.description,
              social: {
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter
              }
            }
          };
          Meteor.call("users.updateProfile", updatedProfile);
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>account page</h1>
            {/* USERNAME */}
            <Typography>{this.props.user?.username}</Typography>
            {/* USERTYPE */}
            <Typography>
              YOU ARE: {this.props.user?.profile?.userType}
            </Typography>
            {/* EMAIL */}
            <Typography>{this.props.user?.emails[0].address}</Typography>
            {/* LOCATION */}
            <Field
              name="location"
              render={({ input }) => <TextField {...input} />}
            />
            PROFILE IMAGE
            <Typography>
              <Button>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">UPLOAD IMAGE</label>
              </Button>
              {/* PROFILE IMAGE:{" "}
              <img
                src={this.props.user && this.props.user.profile.profileImage}
              /> */}
            </Typography>
            {/* DESCRIPTION */}
            <Field
              name="description"
              render={({ input }) => <TextField {...input} />}
            />
            {/* SOCIAL MEDIA */}
            <Field
              name="facebook"
              render={({ input }) => <TextField {...input} />}
            />
            <Field
              name="instagram"
              render={({ input }) => <TextField {...input} />}
            />
            <Field
              name="twitter"
              render={({ input }) => <TextField {...input} />}
            />
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
