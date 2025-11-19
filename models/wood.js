const mongoose = require('mongoose');

const woodSchema = new mongoose.Schema({
  productName: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true 
  },
  unitPrice: { 
    type: Number, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  paymentType: { 
    type: String, 
    required: true 
  },
  quality: { 
    type: String, 
    required: true 
  },
  measurements: { 
    type: String, 
    required: true 
  },
  supplierName: { 
    type: String 
  },
  color: { 
    type: String, 
    required: true 
  },
}); 
module.exports = mongoose.model('woodStock', woodSchema);
