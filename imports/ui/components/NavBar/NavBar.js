import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./styles";
import { withStyles, AppBar, Toolbar } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";

const NavBar = ({ classes }) => {
  return (
    <nav className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <NavLink to="/feed" activeClassName="selected">
            <img
              src={"/images/logo/full-logo-1.png"}
              height="75px"
              width="px"
              alt="logo"
            />
          </NavLink>
          <NavLink to="/event" activeClassName="selected">
            Event
          </NavLink>
          <NavLink to="/artist" activeClassName="selected">
            Artist
          </NavLink>
          <NavLink to="/venue" activeClassName="selected">
            Venue
          </NavLink>
          <NavLink to="/account" activeClassName="selected">
            Account
          </NavLink>
          <NavLink to={`profile/${Meteor.userId()}`} activeClassName="selected">
            Profile
          </NavLink>
          <button
            onClick={() => {
              Meteor.logout();
            }}
          >
            {console.log(Meteor.userId())}
            Logout
          </button>
        </Toolbar>
      </AppBar>

      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
    </nav>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    userId: Meteor.userId()
  };
})(withRouter(withStyles(styles)(NavBar)));
