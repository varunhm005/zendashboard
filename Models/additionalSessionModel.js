const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionalSessionSchema = new mongoose.Schema({
    // Define your document schema here
    additionalsName: { type: String, required: true },
    date: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: false },
});

const AdditionalSessions = mongoose.model('additionalSessions', additionalSessionSchema);

module.exports = AdditionalSessions;