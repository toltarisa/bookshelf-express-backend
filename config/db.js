const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = () => {
    mongoose.connect(`mongodb://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@ds131800.mlab.com:31800/bookshelf`,
    { useNewUrlParser: true,useUnifiedTopology: true })
    mongoose.connection.on('open',() => {
        console.log("connected to remote db successfully");
    });

    mongoose.connection.on('error',(err) => {
        console.log('connection failed: ',err.message);
    })
}