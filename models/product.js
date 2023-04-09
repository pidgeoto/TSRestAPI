const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    active:{
        type:Boolean,
        default:true,
        required: true
    },
    title:{
        type: String,
        required: [true, "title not Found"]
    },
    description: {
        type: String,
    },
    type:{
        type:String
    },
    course:{
        type: String,
        required: [true, "course not Found"]
    },
    
    percentage:{
        type:Number
    },
    amount:{
        type:Number
    },
    university:{
        type:String
    },
    startDate: {
        type: String
    },
    validUpto:{
        type: String
    },
    courses:{
        type: String
    },
    amount:{
        type:String
    },
    link:{
        type:String,
        required: [true, "link not Found"]
    },
    community:{
        type:String
    },
    state:{
        type:String,
        required: [true, "state not Found"]
    },
    country:{
        type:String,
        default:"India",
        required: [true, "country not Found"]
    },
});

module.exports = mongoose.model("Product",productSchema);