const mongoose = require("mongoose");


uri = "mongodb+srv://truescholar:Himanshu1998@tsapi.e0bymq7.mongodb.net/TSAPI?retryWrites=true&w=majority"
const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,


    });
}

module.exports = connectDB;
