const { UserModel } = require('../models/user');

const UserController = {
  // Create a new user
  create: async (req, res) => {
    try {
      const { name, email, position } = req.body;
      const newUser = new UserModel({ name, email, position });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user', details: error });
    }
  },

  // Read all users
  read: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users', details: error });
    }
  },

  // Update a user
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedUser = await UserModel.findByIdAndUpdate(id, updates, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user', details: error });
    }
  },

  // Delete a user
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await UserModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user', details: error });
    }
  },
};

module.exports = { UserController };
