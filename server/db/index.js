//this is the access point for all things database related!
const db = require('./db')

const User = require('./models/User');
const Trip = require('./models/Trip');
const Stay = require('./models/Stay');

//associations could go here!

Stay.belongsTo(Trip); //places tripId on Stay
Stay.belongsTo(User); //places stayId on Stay
Trip.hasMany(Stay);
User.hasMany(Stay);


module.exports = {
  db,
  models: {
    User, Trip, Stay
  },
}
