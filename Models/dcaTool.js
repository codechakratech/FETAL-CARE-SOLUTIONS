const mongoose = require('mongoose')
const dcaSchema = new mongoose.Schema({
    crl_date:{
        type:Date,
        
    },
    crl_in_mm:{
        type:Number,
       
    },
    ga_days:{
        type:Number,
       
    },
    eleven_to_thirteen_weeks_cl:{
        type:Number,
        
    },
    cl_in_mm_1:{
        type:Number,
      
    },
    twenty_to_twentytwo_weeks_cl:{
        type:Number,
       
    },
    cl_in_mm_2:{
        type:Number,
       
    },
    calculate:{
        type:Number,
      
    },
    delivery_date:{
        type:Date,
       
    },
    ga_at_delivery:{
        type:Number,
       
    },
    intervention:{
        type:String,
     
    },
    score:{
        type:Number,
       
    }
})

module.exports = mongoose.model('dcatool',dcaSchema)
