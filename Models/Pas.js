const mongoose = require('mongoose');

const pasSchema = new mongoose.Schema({
    patient_name:{
        type:String
    },
    risk_factor:{
        type:String
    },
    last_menstrual_date:{
        type:Date
    },
    gestational_age_today:{
        type:String
    },
    GS_location:{
        type:String
    },
    scar_thickness:{
        type:Number
    },
    Gestational_sac_length:{
        type:Number
    },
    length_of_sca_below_cs_scar:{
        type:Number
    },
    decidua_situated:{
        type:String
    },
    score:{
        type:Number
    },
    maternal_outcome:{
        type:String
    },
    pregnancy_outcome:{
        type:String
    },
    remark:{
        type:String
    },
    scar_thikness_score:Number,
    sac_below_scar_score:Number,
    decidua_situated_score:Number,
    date_of_exam:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user1'
    }
})

module.exports = mongoose.model('pas',pasSchema);
