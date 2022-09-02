const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


const Trip = db.define('trip', {
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hotel: {
    type: Sequelize.STRING,
  },
  checkIn: {
    type: Sequelize.DATEONLY
  },
  checkOut: {
    type: Sequelize.DATEONLY
  },
});

module.exports = Trip


// date range in one property - overcomplicated
//   dates: {
//     type: Sequelize.RANGE(Sequelize.DATEONLY),
//   }