const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a Name"]
    },
    email:{
        type:String,
        required:[true,"Please add an Email"]
    },
    password:{
        type:String,
        required:[true,"Please add a Password"]
    },
    image:{
        type:String,
        required:[true,"Please add an Image Url"]
    },
    role:{
        type:String,
        required:[true,"Please Select a Role"],
        enum:["teacher","student"]
    },
    belt:{
        type:Boolean
    },
    degree:{
        type:Boolean
    }

},{timestamps:true})

module.exports=mongoose.model('academyUser',UserSchema)