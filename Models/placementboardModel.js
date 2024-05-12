const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placementboardSchema = new mongoose.Schema({
    // Define your document schema here
    name: { type: String, required: true },
    batch: { type: String, required: true },
    studyRole: { type: String, required: true },
    company: { type: String, required: true },
    currentCTC: { type: String, required: true },
    placedThrough: { type: String, required: true },
});

const Mentor = mongoose.model('placementboard', placementboardSchema);

module.exports = Mentor;