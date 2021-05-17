const EC = require('elliptic').ec; // tao khóa, ký và xác minh chữ ký 
const ec = new EC('secp256k1'); // thuật toán của EC
const keyModel =require('../model/key');

exports.createWallet = async (req, res) => {
    const keyPair = ec.genKeyPair();
    const key = new keyModel({
        PublicKey: keyPair.getPublic('hex'),
        PrivateKey: keyPair.getPrivate('hex')
    });
    console.log(key);
    try{
        const saveKey = await key.save();
        res.render('signup', {key: key.PrivateKey});
    }catch(err){
        res.json({ message: err });
    }
}
