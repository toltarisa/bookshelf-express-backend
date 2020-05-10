const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const register = (req,res) => {
    const {username,email,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password,8);
    const newUser = {username,email,password:hashedPassword};
    User.create(newUser,(err,user) => {
       
        if(err) return res.status(500).json({message:"Kullanıcı oluşturulurken bir hata meydana geldi"});
        res.status(201).json({message:'Kullanıcı başarıyla Oluşturuldu'})
    })
}


const login = (req,res) => {
    const {username,password} = req.body;
    const user = {username};

    User.findOne({username})
    .then(data => {
        console.log(data._id,data.password);
        bcrypt.compare(password,data.password)
        .then(value => {
           
            
            if(!value) {
                res.status(401).send("Kullanıcı adı veya şifre yanlış");
            }else {
                const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:60*60});
                res.cookie('auth',token);
                res.json({
                    status:true,
                    author_id:data._id,
                    username,
                    password:data.password,
                    token
                })
            }
        })
    }).catch((err) => console.log(err));
}

const getUsers = (req,res) => {
     User.find({}).then(data => {
         res.status(200).send(data)
     }).catch(() => {
        return res.status(500).json({message:'Kullanıcılar getirilirken bir hata oluştu'});
     })
}

exports.register = register;
exports.login = login;
exports.getUsers = getUsers;