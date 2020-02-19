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
            <img src={"/images/logo/logo-text2.png"} height="150px" width="400px" alt="logo" />
          </NavLink>
          <NavLink to="/archive" activeClassName="selected">
            Archive
          </NavLink>
          <NavLink to="/account" activeClassName="selected">
            Account
          </NavLink>
          <NavLink to={`single/${Meteor.userId()}`} activeClassName="selected">
            Single
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
