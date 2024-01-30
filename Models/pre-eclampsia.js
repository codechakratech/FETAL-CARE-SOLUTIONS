const mongoose = require('mongoose')
const pre_eclampsiaSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    lmp:{
        type:String,
    },
    gest_age:{
        type:String,
    },
    birth_date:{
        type:Date,
    },
    age_at_delivery:{
        type:String,
    },
    previous_ho_pe:{
        type:String,
    },
    systolic_blood_pressure:{
        type:String,
    },
    diastolic_bp_d:{
        type:String,
    },
    mean__arterial_blood_pressure:{
        type:String,
    },
    right_uterine_pi_a:{
        type:String,
    },
    left_uterine_pi_b:{
        type:String,
    },
    mean_pi:{
        type:String,
    },
    PAPP_A_MOM_value:{
         type:String,
    },
    score:{
        type:Number,
    },
    remark:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user1'
    }
})

module.exports = mongoose.model('pre-esclampsia',pre_eclampsiaSchema)
