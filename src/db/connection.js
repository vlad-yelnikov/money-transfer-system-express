const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const mongoConnect = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('db connected..!');
};

module.exports = mongoConnect;
