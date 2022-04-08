const mongoose =require('mongoose');
const studentSchema = new mongoose.Schema({
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
    }
})



const Register = new mongoose.model("Register",studentSchema);
module.exports= Register;