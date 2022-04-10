const mongoose =require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    branch:{
        type: String,
        required:true
    }
})


const Admin = new mongoose.model("Admin",adminSchema);
module.exports= Admin;