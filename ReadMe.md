# VenMuse 🎸

A web application to connect Artists to Venues. The app's backend uses [Meteor](https://www.meteor.com/) for client authentication and authorization to restrict user access to data and [MongoDB](https://www.mongodb.com/) for database and to store the user and events info. The front end uses [React](https://reactjs.org/) for client UI, [Final Form](https://final-form.org/) for form validation and state management, [PropTypes](https://www.npmjs.com/package/prop-types) for React component prop validation, [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start) for URL routing, Google's [MaterialUI](https://material-ui.com/), prebuilt React components for faster implementation.

## Installation Instructions

Follow the instructions below to run the application in on your local device.

### Installation

```bash
curl https://install.meteor.com/ | sh
```

### Build

```
meteor npm install
```

### Run

```bash
meteor
```

## Technologies Used

## Meteor

- A complete platform for building web and mobile apps in JavaScript

```
meteor create --react myapp
```

```
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
```

### MongoDB

- A NoSQL Database Program

```
db.collectionName.find()
```

### React

- A component based JavaScript library that uses state management to create complex User Interfaces.

```
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     //jsx here
     <div>
       <h1>Hello World!</h1>
     </div>

  }
}

export default MyComponent;
```

### MaterialUI

- Google has a large array of prebuilt component for virtually all use cases and is simple to start using in your React app

```
import React from 'react';
import Item from '@material-ui/core';

export default const MyItem = () => {
  <div>
    <Item>
      Cool stuff goes here!
    </Item>
  </div>
}
```
