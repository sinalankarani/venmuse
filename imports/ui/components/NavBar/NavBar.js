import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./styles";
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu
} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import { withTracker } from "meteor/react-meteor-data";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";

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
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.explorebtn}
          >
            EXPLORE
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <NavLink to="/event" className={classes.link}>
              <StyledMenuItem>
                <ListItemText primary="EVENT" />
              </StyledMenuItem>
            </NavLink>

            <NavLink to="/artist" className={classes.link}>
              <StyledMenuItem>
                <ListItemText primary="ARTIST" />
              </StyledMenuItem>
            </NavLink>

            <NavLink to="/venue" className={classes.link}>
              <StyledMenuItem>
                <ListItemText primary="VENUE" />
              </StyledMenuItem>
            </NavLink>
          </StyledMenu>
          <div className={classes.navlinks}>
            <NavLink
              to={`profile/${Meteor.userId()}`}
              activeClassName="selected"
              className={classes.link}
            >
              <PersonOutlineTwoToneIcon className={classes.accountbtn} />
            </NavLink>

            <button
              onClick={() => {
                Meteor.logout();
              }}
              className={classes.logout}
            >
              <PowerSettingsNewIcon className={classes.logoutbtn} />
            </button>
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
