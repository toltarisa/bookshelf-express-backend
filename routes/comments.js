
var express = require('express');
var router = express.Router();
const CommentController = require('../controllers/CommentController');
const verifyToken = require('../middlewares/authenticateToken');

//create a comment to movie 
router.post('/comments', verifyToken.verifyToken, CommentController.create);

// delete a comment from movie 
router.delete('/comments/:id', verifyToken.verifyToken,CommentController.delete);
module.exports = router;