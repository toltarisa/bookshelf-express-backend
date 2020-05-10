const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

/**
 * @swagger
 * definitions:
 *    User:
 *      type: object
 *      properties: 
 *           id:
 *              type: object
 *           username:
 *              type: string
 *            email:
 *              type: string
 *            password: 
 *              type: string
 *              format: password
 *            required:
 *              - usernam
 *              - email
 *              - password
 *            
 */
const UserSchema = new Schema({
    username: {
        type:String,
        min:6,
        max:40
    },
    email: {
        type:String,
        max:50
    },
    password: {
        type:String,
        min:5,
        max:50
    }
})


module.exports = mongoose.model('user',UserSchema);