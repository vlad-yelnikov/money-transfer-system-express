const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema(
  name: {
    type: String,
    required: true,
  },
},
{
  strict: 'throw',
});

module.exports = mongoose.model('user', user);
