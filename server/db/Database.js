const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(`${process.env.DB_URI}`)
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
};

module.exports = connectDatabase;
