const mongoose = require('mongoose');

const connectDB = uri => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        wtimeoutMS: 5000,
    }).then(()=>
        console.log('Connected to the database')
    ).catch((error) => {
        console.error(error);
    });
}

module.exports = connectDB;