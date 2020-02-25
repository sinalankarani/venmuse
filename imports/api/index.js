import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish(
    "events",
    (eventsPublication = () => {
      return Events.find(
        {},
        {
          fields: {
            _id: 1,
            artistApplied: 1,
            create: 1,
            date: 1,
            description: 1,
            filled: 1,
            imageurl: 1,
            lineup: 1,
            location: 1,
            owner: 1,
            tags: 1,
            title: 1
          }
        }
      );
    })
  );

  Meteor.publish(
    "users",
    (usersPublication = () => {
      return Meteor.users.find(
        {},
        {
          fields: {
            emails: 1,
            profile: 1,
            username: 1
          }
        }
      );
    })
  );
}

Meteor.methods({
  "events.addNewEvent"(event) {
    if (Meteor.user().profile.userType !== "venue") {
      throw new Meteor.Error(
        "events.addNewEvent.not-authorized",
        "You are unauthorized to add new events."
      );
    }
    Events.insert({
      ...event,
      owner: this.userId,
      filled: false,
      artistApplied: [],
      lineup: []
    });
  },
  "events.removeEvent"(event) {
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

  "events.cancelApplication"(event) {
    // console.log(this.userId);
    if (Meteor.user().profile.userType !== "artist") {
      throw new Meteor.Error(
        "events.cancelApplication not authorized",
        "You are not authorized to apply or cancel application as a venue"
      );
    }
    if (event.artistApplied.includes(!this.userId)) {
      throw new Meteor.Error(
        "You are not authorized to cancel this application"
      );
    }
    let newArtistApplied = event.artistApplied.filter(
      artist => artist !== this.userId
    );

    Events.update(event._id, {
      $set: { artistApplied: newArtistApplied }
    });
  },

  "events.approveArtist"(event, artistId) {
    if (event.filled) {
      throw new Meteor.Error(
        "events.approveArtist not authorized",
        "Event lineup has already been filled"
      );
    }
    if (event.owner !== this.userId) {
      throw new Meteor.Error("events.approveArtist not authorized", "You do not own this event");
    }
    Events.update(event._id, {
      $set: { filled: true, lineup: [artistId], artistApplied: [] }
    });
  },

  "events.removeArtist"(event, artistId) {
    if (event.owner !== this.userId) {
      throw new Meteor.Error("events.removeArtist not authorized", "You do not own this event");
    }
    if (!event.artistApplied) {
      throw new Meteor.Error(
        "events.removeArtist no authorized",
        "No artists have applied to your event. Womp womp."
      );
    }

    let newArtistApplied = event.artistApplied.filter(artist => artist !== artistId);
    Events.update(event._id, {
      $set: { artistApplied: newArtistApplied }
    });
  },

  "events.remove"(event) {
    if (event.owner !== this.userId) {
      throw new Meteor.Error(
        "events.remove not authorized",
        "You do not own this event"
      );
    }
    Events.remove(event._id);
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
  },

  "users.updateFollowers"(_id) {
    let userId = Meteor.userId();
    Meteor.users.update(_id, {
      $push: { "profile.followers": userId }
    });

    Meteor.users.update(Meteor.userId(), {
      $push: {
        "profile.following": _id
      }
    });
  }
});
