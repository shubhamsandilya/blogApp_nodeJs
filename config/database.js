const mongoose=require("mongoose");
require("dotenv").config();
const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connection successfully"))
    .catch((e)=>{
        console.log("DB connection failed");
        console.log(e);
        process.exit(1);
    })
};
module.exports=connectWithDb;