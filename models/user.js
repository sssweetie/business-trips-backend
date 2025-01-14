const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String },
});

const UserModel = model('users', userSchema);

module.exports = { UserModel };
