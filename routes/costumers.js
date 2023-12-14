const express = require('express')
const costumer = require('../models/costumer')
const router = express.Router()


router.get('/', async (req,res) => {
    try {
        const Costumer = await costumer.find({ user_id: req.user._id })
        res.render('costumer/question'); 
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

  router.post('/', async (req,res) => {
    console.log(req.body.name)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const mqttdata = new mqttData({
        name: req.body.name,
        host: req.body.host,
        username: req.body.username,
        password: hashedPassword,
        port: req.body.port, // Your integer port value
        protocol: req.body.protocol,
        topics: req.body.topics,
        user_id: req.user._id
    })
    try {
        const newMqttdata = await mqttdata.save()
        res.redirect('/mqtt')
    } catch (err) {
        res.status(400).json({message: err.message})
    }
  })

module.exports = router