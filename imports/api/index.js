import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  Meteor.publish('events', function eventsPublication() {
    return Events.find();
  });

  //////////////////KIERAN WILL REMOVE LATER - NOONE ELSE!
  Meteor.publish('users', function usersPublication() {
    return Meteor.users.find();
  });
}

Meteor.methods({
  'events.addNewEvent'(event) {
    if (Meteor.user().profile.userType !== 'venue') {
      throw new Meteor.Error(
        'events.addNewEvent.not-authorized',
        'You are unauthorized to add new events.'
      );
    }
    Events.insert({ ...event, owner: this.userId, filled: false });
  },
  'events.removeEvent'(event) {
    console.log(event);
    if (this.userId !== event.owner) {
      throw new Meteor.Error(
        'events.removeEvent.not-authorized',
        'You are unauthorized to remove events.'
      );
    }
    Events.remove(event._id);
  },

  'users.updateProfile'(newProfileData) {
    if (!this.userId) {
      throw new Meteor.Error(
        'profile.updateProfile.not-authorized',
        'You are not allowed to update profile for other users'
      );
    }

    Meteor.users.update(Meteor.userId(), {
      $set: { profile: { ...Meteor.user().profile, ...newProfileData } }
    });
  }
});
