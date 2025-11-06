const mongoose = require('mongoose');

const woodSalesSchema = new mongoose.Schema({
    customerName: {
        type: String,
    },

    productName: {
        type: String,
        // trim: true,
        // unique: true,
    },
    quantity: {
        type: String,
        // required:true,
    },
    unitPrice: {
        type: String,
    },
    date: {
        type: Number,
        
    },
    paymentType: {
        type: Number,
    },
    salesAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Registration"
    },
    transport: {
        type: Boolean,
    },
    totalPrice: {
        type: Number,
    },
});
module.exports = mongoose.model('WoodSales', woodSalesSchema);