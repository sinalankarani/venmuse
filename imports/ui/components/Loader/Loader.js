import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography, Grid, Fade, Container } from "@material-ui/core/";
import styles from "./styles";
import propTypes from "prop-types";

function Loader({ classes }) {
  return (
    <Fade in>
      <Container className={classes.container}>
        <Grid className={classes.fullLoader}>
          <CircularProgress className={classes.spinner} />
          <Typography className={classes.text} color="primary">
            Your next gig awaits...{" "}
          </Typography>
        </Grid>
      </Container>
    </Fade>
  );
}

Loader.propTypes = {
  classes: propTypes.object
};
export default withStyles(styles)(Loader);
