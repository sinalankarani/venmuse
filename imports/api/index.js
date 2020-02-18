import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventPublication() {
    return Events.find();
  });

  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find();
  });
}

Meteor.methods({
  // event param will be object containing all necessary data
  // then add to events collections
  "events.addNewEvent"(event) {
    // if (user.profile.userType !== 'venue') {
    //   throw new Meteor.Error(
    //     'events.addNewEvent.not-authorized',
    //     'You are unauthorized to add new events.'
    //   );
    // }
    // Events.insert({...event, owner:this.userId}); ------ destruct event object
    // or try spreading and adding any other needed info
    Events.insert(event);
  },

  "users.updateProfile"(newProfileData) {
    // if(newProfileData!this.userId){
    //   throw new Meteor.Error(
    //     'profile.updateProfile.not-authorized',
    //     'You are not allowed to update profile for other users'
    //   );
    // }
    // need to test if correct user and test if newProfileData
    // overwrites current profile data
    Meteor.users.update(users._id, { profile: { ...newProfileData } });
  }
});
