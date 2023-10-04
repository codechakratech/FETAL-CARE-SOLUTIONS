const mongoose = require('mongoose')
const dcaSchema = new mongoose.Schema({
    name:{
        type:String
    },
    crl_date:{
        type:Date,
        
    },
    crl_in_mm:{
        type:String,
       
    },
    ga_days:{
        type:String,
       
    },
    eleven_to_thirteen_weeks_cl:{
        type:Date,
        
    },
    cl_in_mm_1:{
        type:String,
      
    },
    twenty_to_twentytwo_weeks_cl:{
        type:Date,
       
    },
    cl_in_mm_2:{
        type:String,
       
    },
    delivery_date:{
        type:Date,
       
    },
    ga_at_delivery:{
        type:String,
       
    },
    intervention:{
        type:String,
     
    },
    score:{
        type:String,
       
    }
})

module.exports = mongoose.model('dcatool',dcaSchema)
