const { model, Schema } = require('mongoose');

const expenseSchema = new Schema({
  type: { type: String, required: true }, // Например: проживание, питание, транспорт
  amount: { type: Number, required: true },
  description: { type: String }, // Дополнительная информация
});

const ExpenseModel = model('expenses', expenseSchema);

module.exports = { ExpenseModel };
