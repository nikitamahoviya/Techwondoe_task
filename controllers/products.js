const res = require("express/lib/response");

const getAllProducts=async(req,res) => {
res.status(200).json({"id": "12345",
"name": "John",
"surname": "Doe",
"dob": "11/11/2011",
"gender": "male" });
};

const getAllProductsTesting=async(req,res) =>{
    res.status(200).json({msg: "I am getAllProductstesting"});
};

module.exports={getAllProducts, getAllProductsTesting};