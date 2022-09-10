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

router.post('/', async(req, res, next)=> {
  try {
    for(let i= 0; i < req.body.quantity*1; i++){
      await Stay.create(req.body);
    }
    res.status(201).send(await Stay.findAll({ where: {
      tripId: req.body.tripId
    }}))
  }
  catch(ex){
    next(ex);
  }

});