uri = "mongodb+srv://truescholar:Himanshu1998@tsapi.e0bymq7.mongodb.net/TSAPI?retryWrites=true&w=majority";

const connectDB = require("./db/connect");
const Product =require("./models/product");

const ProductJson = require("./products.json");

const start = async()=>{
    try {
        await connectDB(uri);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("SuccessDB");
    } catch (error) {
        console.log(error)
    }
};

start();