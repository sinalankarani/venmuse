import { Meteor } from 'meteor/meteor';
import { Events } from '../../api';
import moment from 'moment';

Meteor.startup(() => {
  //////////////////////////////////////
  /////////////// EVENTS ///////////////
  //////////////////////////////////////
  if (Events.find().count() === 0) {
    Events.insert({
      date: 'February 14, 2020',
      created: moment()
        .startOf()
        .fromNow(),
      title: 'Valentimes ball',
      location: 'Da Club',
      description: 'A super fun love filled night of valentimes day fun',
      imageurl:
        'https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      artistApplied: [],
      tags: ['R&B'],
      lineup: ['Joe shmoe the band', 'the band'],
      filled: true
    });

    Events.insert({
      date: 'April 20, 2020',
      created: moment()
        .startOf()
        .fromNow(),
      title: 'Blaze it',
      location: 'Da Club',
      description: '42069',
      imageurl:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      artistApplied: [],
      tags: ['Hip hop'],
      lineup: ['Snoop'],
      filled: true
    });
    Events.insert({
      date: 'December 24, 2020',
      created: moment()
        .startOf()
        .fromNow(),
      title: 'Christmas Jolly Joy Jamboree',
      location: 'Christmas Market',
      description: '',
      imageurl:
        'https://images.unsplash.com/photo-1512729360855-0d1e1b0983a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      artistApplied: [],
      tags: ['Jazz'],
      lineup: [],
      filled: false
    });
    Events.insert({
      date: 'December, 31, 2020',
      created: moment()
        .startOf()
        .fromNow(),
      title: 'New Years Ball',
      location: 'Times Square', //Venue.name
      description: '',
      imageurl:
        'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      artistApplied: [],
      tags: ['Hip hop', 'Jazz'],
      lineup: [],
      filled: false
    });
  }
  if (Meteor.users.find().count() === 0) {
    //////////////////////////////////////
    /////////////// ARTISTS //////////////
    //////////////////////////////////////
    Accounts.createUser({
      username: 'artist test',
      email: 'artist@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        title: 'Delmar Dick Van Dyke',
        location: 'Vancouver',
        description: 'a super cool band',
        profileImage:
          'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com'
        }
      }
    });
    Accounts.createUser({
      username: 'artist test 2',
      email: 'artist2@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        title: 'N.W.A',
        location: 'Compton',
        description: 'Gangster rap yo',
        profileImage:
          'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com'
        }
      }
    });
    Accounts.createUser({
      username: 'Polkaband',
      email: 'pb@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        title: 'Polka Dots',
        location: 'Langley',
        description: 'A upbeat, classical polka ensemble',
        profileImage:
          'https://images.unsplash.com/flagged/photo-1569231290694-70d80ea24b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com',
          twitter: 'http://www.twitter.com'
        }
      }
    });
    Accounts.createUser({
      username: 'jazzmaster',
      email: 'jerry@test.com',
      password: '12345',
      profile: {
        userType: 'artist',
        title: 'Herbie Hancock',
        location: 'Downtown Van',
        description: 'So you like jazz?',
        profileImage:
          'https://images.unsplash.com/photo-1541804627596-3b5b9ef58c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com',
          twitter: 'http://www.twitter.com'
        }
      }
    });
    //////////////////////////////////////
    /////////////// VENUES ///////////////
    //////////////////////////////////////
    Accounts.createUser({
      username: 'venue test',
      email: 'venue@test.com',
      password: '12345',
      profile: {
        userType: 'venue',
        title: 'Dude Chillin',
        location: 'East Vancouver',
        description: 'a super cool venue',
        profileImage:
          'https://images.unsplash.com/photo-1518079893270-6222a4393c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com'
        }
      }
    });
    Accounts.createUser({
      username: 'Theatre Hall',
      email: 'hall@test.com',
      password: '12345',
      profile: {
        userType: 'venue',
        title: 'The Orpheum',
        location: 'Downtown Vancouver',
        description: 'A gold gilded theatre hall',
        profileImage:
          'https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com'
        }
      }
    });
    Accounts.createUser({
      username: 'Outdoor Music Festival',
      email: 'omf@test.com',
      password: '12345',
      profile: {
        userType: 'venue',
        title: 'Malkin Bowl',
        location: 'Stanley Park',
        description:
          'An outdoor field where we will rock out rain or shine, but probably rain',
        profileImage:
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com',
          twitter: 'http://www.twitter.com'
        }
      }
    });
    Accounts.createUser({
      username: 'Caddy Bar',
      email: 'cadbar@test.com',
      password: '12345',
      profile: {
        userType: 'venue',
        title: 'Cadillac Lounge',
        location: 'Downtown Edmonton',
        description: 'The caddy lounge is the place to be',
        profileImage:
          'https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        images: [],
        social: {
          facebook: 'http://www.facebook.com',
          instagram: 'http://www.instagram.com',
          twitter: 'http://www.twitter.com'
        }
      }
    });
  }
});
