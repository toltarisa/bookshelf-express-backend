const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    book_id:{type:mongoose.Schema.Types.ObjectId},
    text: {
        type:String
    },
    author_id: {type:mongoose.Schema.Types.ObjectId},
    
});

CommentSchema.set('timestamps',true);


module.exports = mongoose.model('comment',CommentSchema);