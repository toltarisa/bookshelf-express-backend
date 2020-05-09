const jwt = require('jsonwebtoken');
const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['Authorizaton'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) res.sendStatus(401);
    
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

exports.authenticateToken = authenticateToken;