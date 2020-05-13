const Comment = require('../models/Comment');
const Book = require('../models/Book');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types;

const CreateComment = async(req,res) => {
    const {author_id,book_id,text} = req.body;
    const newComment = {book_id,text,author_id};
    
    
    await Comment.create(newComment,async(err,data) => {
        if(err) console.log(err)
        if(data) {
            await Comment.findOne({_id: data._id},(err,data)=> {
                if(err) console.log(err);
                console.log(data);
                if(data) {
                    Book.update({_id:book_id},{$push:{comments:data}},(err,doc) => {
                     if(err) console.log(err);
                     console.log(doc);
                 })
                }
                
            })
            res.status(201).json({message:"created"})
        }
    })
    
     
}


const DeleteComment = async(req,res) => {
    const {id} = req.params;
    const {book_id} = req.body;
      
    await Comment.deleteOne({ _id: id }, async function (err) {
        if(err) console.log("Yorum silinirken bir hata oluştu",err);
        res.json({message:` yorum başarıyla silindi `})
    });
     await Comment.find({book_id:book_id},async(err,comments) => {
         if(err) {
             console.log(err);
         }
         else {
              Book.updateOne({_id:ObjectId(book_id)},{$pull:{comments:{_id:ObjectId(id)}}},(err,raw) => {
                 if(err) console.log(err);
                 console.log(raw);
                 res.status(200).json({message:'ok'})
             })
         }

     })
}

const getAllComments = (req,res) => {
    Comment.find({}).then(data => {
        res.status(200).json(data)
    }).catch(() => {
       return res.status(500).json({message:'Yorumlar getirilirken bir hata oluştu'});
    })
}

const getCommentById = (req,res) => {
    const {id} = req.params;
    
    Comment.findOne({_id:id},(err,data)=> {
        if(err) res.json(err);
        res.status(200).json(data);
    })
} 


exports.create = CreateComment;
exports.delete = DeleteComment;
exports.getComments = getAllComments;
exports.getCommentById = getCommentById;


