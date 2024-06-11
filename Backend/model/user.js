const mongoose= require('mongoose');

const userScheme=new mongoose({
    userName: {
        type:String,
        required:true,
        unique:true
    },

    email:{ 
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

export const User= mongoose.model('User', userScheme)