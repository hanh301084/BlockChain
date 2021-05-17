const mongoose = require('mongoose');

const BChainSchema = mongoose.Schema({
    chain: { type: Array, require: true},
    pendingTransactions: {type: Array, default:[]},
    difficulty: {type: Number, default: 0},
    miningReward: {type: Number, require: true}
});

module.exports=mongoose.model('BlockChain',BChainSchema, "BlockChain");