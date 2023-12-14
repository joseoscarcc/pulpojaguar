const mongoose = require('mongoose')

const costumer = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    lastname: {
        type: String
      },
    city: {
      type: String

    },
    state: {
      type: String

    },
    country: {
      type: String

    },
    cp: {
        type: Number

    },
    phone_number: {
        type: String
    },
    number_questions: {
        type: Number,
        required: true
    },
    responses: [{
        type: String // Assuming topics are strings, adjust if needed
      }],
    questions: [{
        type: String // Assuming topics are strings, adjust if needed
      }],
    user_type: [
        {
            paid:{
                type: Boolean
            },
            amount: {
                type: Number
            },
            date: {
                type: date
            }
        }
    ]
  })
  
  
  module.exports = mongoose.model('Costumer', costumer)