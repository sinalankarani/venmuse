import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Typography, Button, TextField, withStyles } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import styles from "./styles";

class Account extends React.Component {
  render() {
    console.log(this.props.user);
    const { classes } = this.props;
    return (
      <Form
        initialValues={{
          username: this.props.user?.username,
          title: this.props.user?.profile?.title,
          location: this.props.user?.profile?.location,
          email: this.props.user?.emails[0].address,
          description: this.props.user?.profile?.description,
          profileImage: this.props.user?.profile?.profileImage,
          facebook: this.props.user?.profile?.social?.facebook,
          instagram: this.props.user?.profile?.social?.instagram,
          twitter: this.props.user?.profile?.social?.twitter
          // the question mark - nullish coalescing google please
        }}
        onSubmit={values => {
          console.log(values);
          const updatedProfile = {
            profile: {
              title: values.title,
              location: values.location,
              description: values.description,
              profileImage: values.profileImage,
              social: {
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter
              }
            }
          };
          Meteor.call("users.updateProfile", updatedProfile, (err, res) => {
            if (err) {
              alert(err.reason);
            }
          });
        }}
        render={({ handleSubmit }) => (
          <form className={classes.formcontainer} onSubmit={handleSubmit}>
            <Typography className={classes.formtitle}>EDIT PROFILE</Typography>

            {/* USERNAME */}
            <Typography className={classes.formlabel}>username: </Typography>
            <Typography>{this.props.user?.username}</Typography>
            {/* EMAIL */}
            <Typography className={classes.formlabel}>email: </Typography>
            <Typography>{this.props.user?.emails[0].address}</Typography>
            {/* TITLE */}
            <Typography className={classes.formlabel}>
              {this.props.user?.profile?.userType} name:
            </Typography>
            <Field
              name="title"
              placeholder="please enter name"
              render={({ input }) => (
                <TextField className={classes.formfield} {...input} />
              )}
            />

            {/* USERTYPE */}
            {/* <Typography>
              YOU ARE: {this.props.user?.profile?.userType}
            </Typography> */}

            {/* LOCATION */}
            <Typography className={classes.formlabel}>location: </Typography>
            <Field
              name="location"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter your location"
                  {...input}
                />
              )}
            />
            {/* PROFILE IMAGE */}
            <Typography className={classes.formlabel}>
              profile image url:{" "}
            </Typography>
            <Field
              name="profileImage"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter a profile image URL"
                  {...input}
                />
              )}
            />
            {/* DESCRIPTION */}
            <Typography className={classes.formlabel}>description: </Typography>
            <Field
              name="description"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter a description"
                  {...input}
                />
              )}
            />
            {/* SOCIAL MEDIA */}
            <Typography className={classes.formlabel}>
              Facebook url:{" "}
            </Typography>
            <Field
              name="facebook"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter your Facebook URL"
                  type="url"
                  {...input}
                />
              )}
            />
            <Typography className={classes.formlabel}>
              Instagram url:{" "}
            </Typography>
            <Field
              name="instagram"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter your Instagram URL"
                  type="url"
                  {...input}
                />
              )}
            />
            <Typography className={classes.formlabel}>Twitter url: </Typography>
            <Field
              name="twitter"
              render={({ input }) => (
                <TextField
                  placeholder="Please enter your Twitter URL"
                  type="url"
                  {...input}
                />
              )}
            />
            <Button className={classes.button} type="submit">
              Save
            </Button>
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
})(withStyles(styles)(Account));
