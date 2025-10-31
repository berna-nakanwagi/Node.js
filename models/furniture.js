const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  type: {
    type: String,
    // trim: true,
    // unique: true,

  },
  price: {
    type: String,
  },
  description: {
    type: String,
    // required:true,
  },
  furnitureImage: {
    type: String
  }
});

module.exports = mongoose.model('FurnitureStock', furnitureSchema);