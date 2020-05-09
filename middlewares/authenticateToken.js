const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    
    if(authHeader) {
        const token = authHeader && authHeader.split(' ')[1];
        
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
            if(err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    }else {
        res.sendStatus(401);
    }

    
   
}

exports.verifyToken = verifyToken;