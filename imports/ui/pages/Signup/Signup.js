import React from "react";
import AccountsForm from "../../components/AccountsForm";
import styles from "./styles";
import { withStyles, Grid } from "@material-ui/core";

const Signup = ({ classes }) => {
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <img
          src={"/images/logo/logo-text2.png"}
          height="150px"
          width="400px"
          alt="logo"
        />
      </Grid>
      <Grid item>
        <AccountsForm />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Signup);
