const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    require: true
  },
  type: {
    type: String,
    default: 'personal'
  }, 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);