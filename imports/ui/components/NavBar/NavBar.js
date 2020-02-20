import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./styles";
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider
} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import { withTracker } from "meteor/react-meteor-data";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";

import EventAvailableTwoToneIcon from "@material-ui/icons/EventAvailableTwoTone";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";

import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);
const NavBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <NavLink to="/event" className={classes.link}>
        <StyledMenuItem className={classes.linkcontainer}>
          <EventAvailableTwoToneIcon className={classes.linkbtn} />
          <Typography className={classes.linklabel}>EVENTS</Typography>
        </StyledMenuItem>
      </NavLink>
      <Divider />

      <NavLink to="/artist" className={classes.link}>
        <StyledMenuItem className={classes.linkcontainer}>
          <GroupTwoToneIcon className={classes.linkbtn} />
          <Typography className={classes.linklabel}>ARTISTS</Typography>
        </StyledMenuItem>
      </NavLink>
      <Divider />

      <NavLink to="/venue" className={classes.link}>
        <StyledMenuItem className={classes.linkcontainer}>
          <HomeTwoToneIcon className={classes.linkbtn} />
          <Typography className={classes.linklabel}>VENUES</Typography>
        </StyledMenuItem>
      </NavLink>
    </div>
  );

  return (
    <nav className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.nav}>
          <NavLink
            to="/feed"
            activeClassName="selected"
            className={classes.link}
          >
            <img
              src={"/images/logo/Final/full-logo.png"}
              height="75px"
              width="px"
              alt="logo"
            />
          </NavLink>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          ></StyledMenu>
          <div className={classes.navlinks}>
            <div>
              <Button
                onClick={toggleDrawer("top", true)}
                className={classes.btncontainer}
              >
                <div>
                  <ExploreTwoToneIcon className={classes.discoverbtn} />
                  <Typography className={classes.discoverlabel}>
                    DISCOVER
                  </Typography>
                </div>
              </Button>
              <Drawer
                anchor="top"
                open={state.top}
                // onMouseLeave={toggleDrawer("top", false)}
                onClose={toggleDrawer("top", false)}
              >
                {fullList("top")}
              </Drawer>
            </div>
            <NavLink
              to={`/profile/${Meteor.userId()}`}
              activeClassName="selected"
              className={classes.link}
            >
              <Button className={classes.btncontainer}>
                <div>
                  <PersonOutlineTwoToneIcon className={classes.profilebtn} />
                  <Typography className={classes.profilelabel}>
                    PROFILE
                  </Typography>
                </div>
              </Button>
            </NavLink>

            <Button
              className={classes.btncontainer}
              onClick={() => {
                Meteor.logout();
              }}
            >
              <div>
                <PowerSettingsNewIcon className={classes.logoutbtn} />
                <Typography className={classes.logoutlabel}>LOGOUT</Typography>
              </div>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    userId: Meteor.userId()
  };
})(withRouter(withStyles(styles)(NavBar)));
