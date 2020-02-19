import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import styles from "./styles.css";
import App from "../../ui/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
