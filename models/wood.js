const mongoose = require('mongoose');

const woodSchema = new mongoose.Schema({
  type: {
    type: String,
     },
     
  quantity: {
    type: Number,
    // trim: true,
    // unique: true,
    
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