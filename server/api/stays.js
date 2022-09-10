const router = require('express').Router()
const { models: { Stay }} = require('../db')
const User = require('../db/models/User')
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
    var users = await User.findAll({
      attributes: ['id']
    })
    //array shuffle
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    //users are now shuffled
    let shuffledUsers = shuffleArray(users)
//    console.log(shuffledUsers)

    for(let i= 0; i < req.body.quantity*1; i++){
      //assign a randomly shuffled user to req.body
      req.body.userId = shuffledUsers[i].id;
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