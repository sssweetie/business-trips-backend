const { model, Schema } = require('mongoose');

const businessTripSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Ссылка на пользователя
  city: { type: Schema.Types.ObjectId, ref: 'City', required: true }, // Ссылка на город
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }], // Список расходов
  purpose: { type: String }, // Цель командировки
});

const BusinessTripModel = model('business-trips', businessTripSchema);

module.exports = { BusinessTripModel };
