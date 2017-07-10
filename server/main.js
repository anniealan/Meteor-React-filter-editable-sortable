import { Meteor } from 'meteor/meteor';
import { Client } from '../imports/api/clients.js';
import faker from 'faker'

Meteor.startup(() => {
    if (Client.find().count() === 0) {
      for(let i = 0; i < 40; ++i) {
          Client.insert({
              name:  faker.name.findName(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber()
          })
      }
    }
});
