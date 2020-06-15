const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', user);
