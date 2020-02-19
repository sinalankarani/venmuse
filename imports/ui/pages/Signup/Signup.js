import React from "react";
import AccountsForm from "../../AccountsForm";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const Signup = classes => {
  return (
    <div className={classes.container}>
      <h1>signup page</h1>
      <img src={"/images/logo/logo-text2.png"} height="150px" width="400px" alt="logo" />
      <AccountsForm />
    </div>
  );
};

export default withStyles(styles)(Signup);
