const Product = require("../models/product");
 
const getAllProducts =async(req,res)=>{
    const {title,description,type,course,university,state,sort} = req.query;
    const queryObject= {};

    if(title){
        queryObject.title = {$regex:title, $options:"i"};
    }
    if(description){
        queryObject.description = {$regex:description, $options:"i"};
    }
    if(type){
        queryObject.type = {$regex:type, $options:"i"};
    }
    if(course){
        queryObject.course = {$regex:course, $options:"i"};
    }
    if(university){
        queryObject.university = {$regex:university, $options:"i"};
    }
    if(state){
        queryObject.state = {$regex:state, $options:"i"};
    }

    let apiLink = Product.find(queryObject);
    if(sort){
        let sortData = sort.replace(","," ");
        apiLink = apiLink.sort(sortData)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1)*limit;
    apiLink  = apiLink.skip(skip).limit(limit);

    const jsonData = await apiLink;
    res.status(200).json({jsonData, nbHits:jsonData.length });
};

const getAllProductsTesting =async(req,res)=>{
    const jsonData = await Product.find(req.query);
    res.status(200).json({jsonData});
};

module.exports = {getAllProducts,getAllProductsTesting};