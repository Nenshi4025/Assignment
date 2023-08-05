var express = require('express');
const Data = require('../models/data');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  let data = await Data.find()
  console.log(data, "my data")

  res.status(200).send(data)
  res.render('index', { title: 'umang' })
})

router.post('/', async (req, res) => {
  try {
    // console.log(req.body, "My body")
    let data = new Data(req.body)
    await data.save()
    const newData = req.body
    console.log(newData, "New data")
    res.status(201).send(newData)
  } catch (e) {
    console.log(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    let data = await Data.findById(req.params.id)
    const updates = Object.keys(req.body);

    updates.forEach((update) => {
      user[data] = req.body[update]
    });

    await data.save();
    res.status(200).send(data)

  } catch (e) {
    console.log(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let data = await Data.findById(req.params.id)
    console.log(data, "no")
    await data.deleteOne()
    res.status(200).send(data)

  } catch (e) {
    console.log(e)
  }
})


module.exports = router;
