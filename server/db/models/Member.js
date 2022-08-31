const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


const Member = db.define('member', {
  firstName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  avatar: Sequelize.TEXT
});

module.exports = Member