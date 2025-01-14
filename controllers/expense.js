const { ExpenseModel } = require('../models/expense');

const ExpenseController = {
  // Create a new expense
  create: async (req, res) => {
    try {
      const { type, amount, description } = req.body;
      const newExpense = new ExpenseModel({ type, amount, description });
      await newExpense.save();
      res.status(201).json(newExpense);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to create expense', details: error });
    }
  },

  // Read all expenses
  read: async (req, res) => {
    try {
      const expenses = await ExpenseModel.find();
      res.status(200).json(expenses);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to fetch expenses', details: error });
    }
  },

  // Update an expense
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedExpense = await ExpenseModel.findByIdAndUpdate(id, updates, {
        new: true,
      });
      res.status(200).json(updatedExpense);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to update expense', details: error });
    }
  },

  // Delete an expense
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await ExpenseModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to delete expense', details: error });
    }
  },
};

module.exports = { ExpenseController };
