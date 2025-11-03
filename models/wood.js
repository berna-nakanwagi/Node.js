const mongoose = require('mongoose');

const woodSchema = new mongoose.Schema({
  customerName: {
    type: String,
     },
  productType: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
  date: {
    type: Number,
  },
  paymentType: {
    type: Number,
  },

// password:{
//     type:String,
// },
// role:{
//     type: String,
//     required:true,
// }
});

module.exports = mongoose.model('woodStock', woodSchema);