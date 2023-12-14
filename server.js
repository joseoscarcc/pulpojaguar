if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const flash = require('express-flash')
const methodOverride = require('method-override')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/pulpojaguar')

// Check for MongoDB connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  // Check for successful MongoDB connection
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  app.use(express.urlencoded({ extended: false}))
  app.use(flash())

  app.use(methodOverride('_method'))
  app.use(express.json())

  app.get('/', (req,res) => {
    res.render('index')
    })

  app.use('/questions', authRouter)


app.listen(3050)