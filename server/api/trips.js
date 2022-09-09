const router = require('express').Router()
const { models: { Trip }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const trips = await Trip.findAll({});
    res.json(trips)
  } catch (err) {
    next(err)
  }
})

router.post('/', async(req, res, next)=> {
  try {
    res.status(201).send(await Trip.create(req.body));
  }
  catch(ex){
    next(ex);
  }

});

