const mongoose = require('mongoose');

const pasSchema = new mongoose.Schema({
    patient_name:{
        type:String,
        required:true
    },
    last_menstrual_date:{
        type:Date,
        required:true
    },
    gestational_age_today:{
        type:String,
        required:true
    },
    GS_location:{
        type:String,
        required:true
    },
    scar_thickness:{
        type:Number,
        required:true
    },
    Gestational_sac_length:{
        type:Number,
        required:true
    },
    length_of_sca_below_cs_scar:{
        type:Number,
        required:true
    },
    decidua_situated:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('pas',pasSchema);