const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017');

const db = mongoose.connection;

db.on('error', () => console.error(console, 'Connection error:'));

db.once('open', () => {
  console.log('Mongo connected');
});

module.exports = { db };
