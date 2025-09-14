let Dotenv=require("dotenv")
Dotenv.config()
let Mongoose=require("mongoose")

function DbConnect(){
    Mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB CONNECTED SUCCESSFULLY");
        
    })
    .catch(()=>{
        console.log("DB NOT CONNECTED");
        
    })
}

module.exports=DbConnect