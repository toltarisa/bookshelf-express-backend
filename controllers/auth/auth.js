const jwt = require('jsonwebtoken');

const login = (req,res) => {
    const username = req.body.username;
    const user = {name:username}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
}