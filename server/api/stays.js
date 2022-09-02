const router = require('express').Router()
const { models: { Stay }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stays = await Stay.findAll({})
    res.json(stays)
  } catch (err) {
    next(err)
  }
})
