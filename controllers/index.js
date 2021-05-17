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
        res.render('signup', {key:null, Privatekey: keyPair.getPrivate('hex')});
    }catch(err){
        res.json({ message: err });
    }
}

// lộ Private Key khi gửi đi, Private Key bị nhớ lại t thẻ input
exports.accessWallet = async (req, res) => {
    const myPrivateKey = req.body.PrivateKey;
    try{
        const myKey = await keyModel.find({"hashPrivateKey":SHA256(myPrivateKey).toString()}); 
        req.session.key = myKey;
        console.log('myKey'+req.session.key);
        res.redirect('/');
    }catch(err){
        res.json({ message: err });
    }
}