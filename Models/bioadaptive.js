const mongoose = require('mongoose');

const bioadaptiveSchema = new mongoose.Schema({
    patient_name: {
        type: String
    },
    date_of_exam: {
        type: Date
    },
    last_menstrual_date: {
        type: Date
    },
    gestational_age_today: {
        type: String
    },
    clinical_indication: {
        type: String
    },
    fetal_weight_gm: {
        type: String
    },
    percentile: {
        type: String
    },
    amniotic_fluid_index: {
        type: String
    },
    mca_pi: { type: String },
    umb_pi: { type: String },
    cpr_ratio: { type: String },
    score: {
        type: Number
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user1'
    }
})

module.exports = mongoose.model('bioadaptive', bioadaptiveSchema);
