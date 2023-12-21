const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
      lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String
    },
    pincode:{
        type:Number
    },
    clinic_council_no:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('user1',userSchema)
