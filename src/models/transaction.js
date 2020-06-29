const mongoose = require('mongoose');

const { Schema } = mongoose;

const transaction = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'card',
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'card',
      required: true,
    },
    amount: {
      type: Number,
      min: 1,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    strict: 'throw',
  }
);

module.exports = mongoose.model('transaction', transaction);
