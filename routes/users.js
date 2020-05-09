var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../middlewares/authenticateToken');
const checkDuplication = require('../middlewares/checkDuplication');



router.post('/register', checkDuplication.checkIfUsernameOrEmailDuplicate, UserController.register);
router.post('/login',UserController.login);
router.get('/', verifyToken.verifyToken, UserController.getUsers);

module.exports = router;
