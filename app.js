const express = require("express")
const app = express();
const connectDB =require("./db/connect");

const product_routes = require("./routes/product")
const PORT = process.env.PORT || 5001;

app.get("/",(req,res)=>{
    res.send("Hey, TrueScholar is Live");
});

//Setting up router
app.use("/api/products",product_routes);

const start = async()=>{
    try {
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am Connected`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();
