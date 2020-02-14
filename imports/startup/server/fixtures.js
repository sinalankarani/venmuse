import { Meteor } from 'meteor/meteor';
import { Events } from '../../api';
import moment from 'moment';

Meteor.startup(() => {
  if (Events.find().count() === 0) {
    Events.insert({
      date: 'February 14, 2020',
      created: moment()
        .startOf()
        .fromNow(), //find date method for mongo
      title: 'Valentimes ball',
      location: 'Da Club', //Venue.name
      description: 'A super fun love filled night of valentimes day fun',
      imageurl:
        'https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      artist: ['Joe shmoe the band', 'the band'],
      filled: false
    });

    Events.insert({
      date: 'April 20, 2020',
      created: moment()
        .startOf()
        .fromNow(), //find date method for mongo
      title: 'blaze it',
      location: 'Da Club', //Venue.name
      description: 'lol  4 20 2020',
      imageurl:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      artist: ['Snoop']
    });
    Events.insert({
      date: 'December 24, 2020',
      created: moment()
        .startOf()
        .fromNow(), //find date method for mongo
      title: 'Christmas Market Jolly Joy Jamboree',
      location: 'Christmas Market', //Venue.name
      description: '',
      imageurl:
        'https://images.unsplash.com/photo-1512729360855-0d1e1b0983a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      artist: []
    });
  }
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'artist test',
      email: 'artist@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        location: 'Vancouver',
        description: 'a super cool band',
        profileImage:
          'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: ['facebook', 'insta']
      }
    });
    Accounts.createUser({
      username: 'artist test 2',
      email: 'artist2@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        location: 'Surrey',
        description: 'a super hood hip hop group',
        profileImage:
          'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: ['facebook', 'insta']
      }
    });
    Accounts.createUser({
      username: 'venue test',
      email: 'venue@test.com',
      password: '12345',
      profile: {
        userType: 'venue',
        location: 'East Vancouver',
        description: 'a super cool venue',
        profileImage:
          'https://images.unsplash.com/photo-1518079893270-6222a4393c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: ['facebook', 'insta', 'twitter']
      }
    });
  }
});

//////////////////////////////////////// Current DB schema
// Collection: Events
// - id
// -due date (event date)
// - date created
// - title
// -desc
// -Venue.location (Google Maps iframe)
// - Venue.id
// - imageurl
// -Artist.id []

// Collection: Artist
// - id
// - name
// -location (Google Maps iframe)
// - desc
// - media (api to music)
// - social media
// - genre [tags]
// -imageurl
// - additional images [string]

// Collection: Venue
// - id
// - name
// -location
// -desc
// -social media
// -genre [tags]
// - imageurl
// -additional images [string]
