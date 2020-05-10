const Comment = require('../models/Comment');

const CreateComment = (req,res) => {
    const {author_id,book_id,text} = req.body;
    const newComment = {book_id,text,author_id};
    
    
    Comment.create(newComment)
    .then(() => res.json({message:`comment created with user id: ${author_id}`}))
    .catch(err=> console.log(err));
}


const DeleteComment = (req,res) => {
    const {id} = req.params;
    Comment.deleteOne({ _id: id }, function (err) {
        if(err) console.log("Yorum silinirken bir hata oluştu",err);
        res.json({message:` yorum başarıyla silindi `})
      });
}


exports.create = CreateComment;
exports.delete = DeleteComment;