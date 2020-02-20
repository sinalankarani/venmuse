import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventsPublication() {
    return Events.find();
  });

  //////////////////KIERAN WILL REMOVE LATER - NOONE ELSE!
  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find();
  });
}

Meteor.methods({
  "events.addNewEvent"(event) {
    if (Meteor.user().profile.userType !== "venue") {
      throw new Meteor.Error(
        "events.addNewEvent.not-authorized",
        "You are unauthorized to add new events."
      );
    }
    Events.insert({ ...event, owner: this.userId, filled: false, artistApplied: [] });
  },
  "events.removeEvent"(event) {
    console.log(event);
    if (this.userId !== event.owner) {
      throw new Meteor.Error(
        "events.removeEvent.not-authorized",
        "You are unauthorized to remove events."
      );
    }
    Events.remove(event._id);
  },

  "events.applyToEvent"(event) {
    if (Meteor.user().profile.userType !== "artist") {
      throw new Meteor.Error(
        "events.applyToEvent not authorized",
        "You cannot apply to this event because you are signed in as a venue"
      );
    }
    if (event.filled) {
      throw new Meteor.Error(
        "events.applyToEvent not authorized",
        "This event lineup has been filled"
      );
    }
    if (event.artistApplied.includes(this.userId)) {
      throw new Meteor.Error(
        "events.applyToEvent not authorized",
        "You have already applied to this event."
      );
    }
    Events.update(event._id, {
      $set: { artistApplied: [...event.artistApplied, Meteor.userId()] }
    });
  },

  "users.updateProfile"({ profile }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "profile.updateProfile.not-authorized",
        "You are not allowed to update profile for other users"
      );
    }

    Meteor.users.update(Meteor.userId(), {
      $set: { profile: { ...Meteor.user().profile, ...profile } }
    });
  }
});
