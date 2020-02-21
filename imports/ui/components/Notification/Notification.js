import React from 'react';
import { Events } from '../../../api';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Notification = ({ myEvents }) => {
  let counter = 0;
  return (
    <div>
      {myEvents &&
        myEvents.map(myEvent => {
          myEvent && myEvent.artistApplied && myEvent.artistApplied.length
            ? ((counter += myEvent.artistApplied.length), console.log(counter))
            : null;
        })}
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('events');
  return {
    myEvents: Events.find({ owner: Meteor.userId() }).fetch()
  };
})(Notification);
