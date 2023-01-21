const mongoose=require("mongoose");


uri="mongodb+srv://nikitamahoviya:<18MI440n>@techwondoeapi.48jcgzv.mongodb.net/TechwondoeAPI?retryWrites=true&w=majority";
const connectDB=() =>{
    console.log("connect db");
    return mongoose.connect(uri, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports=connectDB;