const mongoose = require('mongoose');

const woodSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  productType: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  unitPrice: {
    type: String,
  },
  date: {
    type: Number,
  },
  paymentType: {
    type: String,
  },
  quality: {
    type: String,
  },
  measurements: {
    type: Number,
  },
   supplierName: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model('woodStock', woodSchema);