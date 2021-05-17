const mongoose = require('mongoose');

const TransSchema = mongoose.Schema({
    fromAddress: { type: String, require: true},
    toAddress: {type: String, require: true},
    amount: {type: Number, require: true},
    timestamp: {type: Date, default: Date.now}
});

module.exports=mongoose.model('Transaction',TransSchema, "Transaction");
