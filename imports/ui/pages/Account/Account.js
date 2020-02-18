import React from "react";
import AccountsForm from "../../AccountsForm";

class Account extends React.Component {
  render() {
    console.log("on accounts page");
    return (
      <React.Fragment>
        <h1>account page</h1>
        <AccountsForm />
      </React.Fragment>
    );
  }
}

export default Account;
