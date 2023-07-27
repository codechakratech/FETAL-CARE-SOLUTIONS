const mongoose = require('mongoose');

const pasSchema = new mongoose.Schema({
    patient_name : String,
    last_menstrual_date:Date,
    gestational_age_today:String,
    GS_location:String,
    scar_thickness:Number,
    Gestational_sac_length:Number,
    length_of_sca_below_cs_scar:Number,
    decidua_situated:String,
    score:Number
})

module.exports = mongoose.model('pas',pasSchema);