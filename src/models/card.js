const mongoose = require('mongoose');

const { Schema } = mongoose;

const card = new Schema({
  number: {
    type: Number,
    required: true,
  },
  debit: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  creditLimit: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
},
{
  strict: 'throw',
});

module.exports = mongoose.model('card', card);
