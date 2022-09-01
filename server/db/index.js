//this is the access point for all things database related!
const db = require('./db')

const User = require('./models/User');
const Trip = require('./models/Trip');
const Stay = require('./models/Stay');

//associations could go here!

module.exports = {
  db,
  models: {
    User, Trip, Stay
  },
}
