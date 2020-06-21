const mongoose = require('mongoose');

const { Schema } = mongoose;

const card = new Schema(
  {
    number: {
      type: Number,
      min: 11111111,
      max: 99999999,
      required: true,
    },
    debit: {
      type: Number,
      min: 0,
      required: true,
    },
    credit: {
      type: Number,
      min: 0,
      required: true,
    },
    creditLimit: {
      type: Number,
      min: 0,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    strict: 'throw',
  },
);

module.exports = mongoose.model('card', card);
