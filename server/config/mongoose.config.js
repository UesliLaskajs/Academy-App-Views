const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27018/views",{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log("Succesfuly connected to db")
})
.catch((err)=>{
    console.log("Error Connecting to database",err)
})

