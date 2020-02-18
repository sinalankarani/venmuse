import React from 'react';
import AccountsForm from '../../AccountsForm';
import NavBar from '../../components/NavBar';

class Account extends React.Component {
  render() {
    console.log('on accounts page');
    return (
      <React.Fragment>
        <AccountsForm />
      </React.Fragment>
    );
  }
}
export default Account;
