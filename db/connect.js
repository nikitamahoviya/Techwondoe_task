const mongoose=require("mongoose");


uri="mongodb+srv://nikitamahoviya:<Password>@techwondoeapi.48jcgzv.mongodb.net/TechwondoeAPI?retryWrites=true&w=majority";
const connectDB=() =>{
    console.log("connect db");
    return mongoose.connect(uri, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports=connectDB;
