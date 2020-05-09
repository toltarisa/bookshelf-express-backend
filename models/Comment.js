const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type:String
    },
    author: [{type:mongoose.Schema.Types.ObjectId,ref:'user'}]
});

CommentSchema.set('timestamps',true);


module.exports = mongoose.model('comment',CommentSchema);