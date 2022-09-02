const router = require('express').Router()
const { models: { Trip }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const trips = await Trip.findAll({})
    res.json(trips)
  } catch (err) {
    next(err)
  }
})
