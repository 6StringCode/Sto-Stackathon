const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


const Stay = db.define('stay', {
  companyHousing: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  kitchen: {
    type: Sequelize.BOOLEAN,
  },
  microwave: {
    type: Sequelize.BOOLEAN,
  },
  Bed: {
    type: Sequelize.ENUM('KING', 'QUEEN', 'TWIN-DOUBLE')
  },
});

module.exports = Stay