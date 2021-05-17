const mongoose = require('mongoose');

const BChainSchema = mongoose.Schema({
    transactions: { type: Array, require: true},
    previousHash: {type: String, require: true},
    hash: {type: Number, require: true},
    nonce: {type: Number, default:0},
    timestamp: {type: Date, default: Date.now}
});

module.exports=mongoose.model('BlockChain',BChainSchema, "BlockChain");
