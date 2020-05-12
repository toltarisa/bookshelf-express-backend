
var express = require('express');
var router = express.Router();
const verifyToken = require('../middlewares/authenticateToken');
const BookController = require('../controllers/BookController');

router.get('/',verifyToken.verifyToken,BookController.getAllBooks)
router.get("/:id",verifyToken.verifyToken,BookController.getBookById)
router.delete('/delete/:id', verifyToken.verifyToken,BookController.deleteBook);
module.exports = router;