const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  username: {
    type: String,
     },
     
  email: {
    type: String,
    trim: true,
    unique: true,
    
  },
password:{
    type:String,
},
role:{
    type: String,
    required:true,
}
});

module.exports = mongoose.model('Registration', registrationSchema);