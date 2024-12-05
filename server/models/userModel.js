const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type : String,
        enum:['buyer','seller'],
        default : 'buyer'
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

export const User = mongoose.model('User',UserSchema)