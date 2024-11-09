const mongoose=require("mongoose")

const connectDb=async()=>{
await mongoose.connect("mongodb://localhost:27017/batch3")
console.log("MongoDb connected Successfully!")
}

module.exports=connectDb