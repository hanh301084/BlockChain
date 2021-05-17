const mongoose = require('mongoose');
const SHA256 = require('crypto-js/sha256');

const KeySchema = mongoose.Schema({
    PrivateKey: {type: String, require: true},
    PublicKey: { type: String, require: true , unique: true}    
});

KeySchema.methods.hashKey=function(PrivateKey){
    return SHA256(PrivateKey).toString();
}
KeySchema.methods.validKey=function(PrivateKey){
    return this.PrivateKey===SHA256(PrivateKey).toString();
}

module.exports=mongoose.model('Key',KeySchema, "Key");