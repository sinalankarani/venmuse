import React from "react";
import AccountsForm from "../../AccountsForm";
import NavBar from "../../components/NavBar";

class Login extends React.Component {
  render() {
    console.log("on accounts page");
    return (
      <React.Fragment>
        <NavBar />
        <AccountsForm />
        <p>poop</p>
      </React.Fragment>
    );
  }
}

export default Login;
