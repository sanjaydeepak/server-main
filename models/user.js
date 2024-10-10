const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    username : {
        type : String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:String,
        required: true,
    },

});
const user=mongoose.model('user',userschema);
module.exports=user;