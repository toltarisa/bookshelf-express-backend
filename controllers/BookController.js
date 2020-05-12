const Book = require('../models/Book');

const getAllBooks = (req,res) => {
    Book.find({})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(err.status).json(err.message));
}

const getBookById = (req,res) => {
    const id = req.params;

    Book.findOne({_id:id},(err,data)=> {
        if(err) res.json(err);
        res.json(data);
    })
}

const DeleteBook = (req,res) => {
    const {id} = req.params;
    Book.deleteOne({ _id: id }, function (err) {
        if(err) console.log("Kitap silinirken bir hata oluştu",err);
        res.json({message:` Kitap başarıyla silindi `})
      });
}

exports.getBookById = getBookById;
exports.getAllBooks = getAllBooks;
exports.deleteBook = DeleteBook

