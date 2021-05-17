const mongoose = require('mongoose');

const KeySchema = mongoose.Schema({
    PublicKey: { type: String, require: true, unique: true },
    hashPrivateKey: {type: String, require: true, unique: true}
});

module.exports=mongoose.model('Key',KeySchema, "Key");