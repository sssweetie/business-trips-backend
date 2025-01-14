const { BusinessTripModel } = require('../models/business-trip');

const BusinessTripController = {
  // Create a new business trip
  create: async (req, res) => {
    try {
      const { user, city, startDate, endDate, expenses, purpose } = req.body;
      const newBusinessTrip = new BusinessTripModel({
        user,
        city,
        startDate,
        endDate,
        expenses,
        purpose,
      });
      await newBusinessTrip.save();
      res.status(201).json(newBusinessTrip);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to create business trip', details: error });
    }
  },

  // Read all business trips
  read: async (req, res) => {
    try {
      const businessTrips = await BusinessTripModel.find()
        .populate('user')
        .populate('city')
        .populate('expenses');
      res.status(200).json(businessTrips);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to fetch business trips', details: error });
    }
  },

  // Update a business trip
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedBusinessTrip = await BusinessTripModel.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
      res.status(200).json(updatedBusinessTrip);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to update business trip', details: error });
    }
  },

  // Delete a business trip
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await BusinessTripModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Business trip deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Failed to delete business trip', details: error });
    }
  },
};

module.exports = { BusinessTripController };
