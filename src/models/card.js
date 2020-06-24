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
      default: 0,
    },
    credit: {
      type: Number,
      min: 0,
      default: 0,
    },
    creditLimit: {
      type: Number,
      min: 0,
      default: 0,
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
