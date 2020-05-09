const User = require('../models/User');

const checkIfUsernameOrEmailDuplicate = (req,res,next) => {
    const {username,email} = req.body;
    User.findOne({
        username
    }).exec((err,user) => {
        if(err) {
            res.status(500).send({message:err});
            return;
        }
        
        if(user) {
            res.status(400).send({message: 'Bu kullanici adı zaten mevcut'});
            return;
        }
    });

    User.findOne({
        email
    }).exec((err,user) => {
        if(err) {
            res.status(500).send({message:err});
            return;
        }

        if(user) {
            res.status(400).send({message: 'Bu email zaten mevcut'});
            return;
        }
    });

    next();
}

exports.checkIfUsernameOrEmailDuplicate = checkIfUsernameOrEmailDuplicate;