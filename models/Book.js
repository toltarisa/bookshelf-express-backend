const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type:String
    },
    authors:{
        type:Array
    },
    description: {
        type:String
    },
    imageLinks: {
        type:Array
    },
    categories: {
        type:Array
    },
    comments: [
        {type:mongoose.Schema.Types.ObjectId,ref:'comment'}
    ]

})

module.exports = mongoose.model('book',BookSchema);