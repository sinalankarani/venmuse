import React from "react";
import { Box, Typography, withStyles } from "@material-ui/core";
// import PropTypes from "prop-types";
import styles from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = ({ classes }) => {
  return (
    <Box className={classes.footerContainer}>
      <div className={classes.logoContainer}>
        <Typography className={classes.title}>venmuse</Typography>
        <Typography className={classes.motto}>
          your next gig awaits you
        </Typography>
      </div>
      <div className={classes.nameContainer}>
        <Typography className={classes.createdby}>created by</Typography>
        <div className={classes.names}>
          <a className={classes.name} href="https://github.com/ybxiang05/">
            Brooke <GitHubIcon />
          </a>
          <a className={classes.name} href="https://github.com/khuang-dev/">
            Ken <GitHubIcon />
          </a>
          <a className={classes.name} href="https://github.com/kierandevlin/">
            Kieran <GitHubIcon />
          </a>
          <a className={classes.name} href="https://github.com/carbonmass/">
            Sina <GitHubIcon />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default withStyles(styles)(Footer);
