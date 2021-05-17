const EC = require('elliptic').ec; // tao khóa, ký và xác minh chữ ký 
const ec = new EC('secp256k1'); // thuật toán của EC
const SHA256 = require('crypto-js/sha256');
const keyModel = require('../model/key');

exports.createWallet = async (req, res) => {
    const keyPair = ec.genKeyPair();
    const key = new keyModel({
        PublicKey: keyPair.getPublic('hex'),
        hashPrivateKey: SHA256(keyPair.getPrivate('hex')).toString()
    });
    console.log(key.PublicKey + '\n' + key.hashPrivateKey);
    try{
        const saveKey = await key.save(); 
        res.render('signup', {key: keyPair.getPrivate('hex')});
    }catch(err){
        res.json({ message: err });
    }
}
