import React from 'react';
import AccountsForm from '../../AccountsForm';

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
