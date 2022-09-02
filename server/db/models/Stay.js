const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


const Stay = db.define('stay', {
  companyHousing: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  amenity: {
    type: Sequelize.ENUM('KITCHENETTE', 'KITCHEN', 'MICROWAVE')
  },
});

module.exports = Stay