const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=Schema({
    user:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    audioLink:{type:String,required:true},
})
const User=mongoose.model('User',UserSchema)
module.exports=User