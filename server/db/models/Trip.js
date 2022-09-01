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
  date: {
    type: Sequelize.RANGE(Sequelize.DATEONLY),
  }
});

module.exports = Trip