import { Mongo } from 'meteor/mongo';
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  Meteor.publish('events', function todosPublication() {
    return Events.find();
  });
}

Meteor.methods({
  // event param will be object containing all necessary data
  // then add to events collections
  'events.addNewEvent'(event) {
    if (user.profile.userType !== 'venue') {
      throw new Meteor.Error(
        'events.addNewEvent.not-authorized',
        'You are unauthorized to add new events.'
      );
    }
    Events.insert(event);
  }
});
