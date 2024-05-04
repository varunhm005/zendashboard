const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    // Define your document schema here
    companyName: { type: String, required: true },
    companyUrl: { type: String, required: true },
    role: { type: String, required: true },
    ctc: { type: String, required: true },
    natureOfJob: { type: String, required: true },
    openings: { type: String, required: true },
    deadline: { type: String, required: true },
    program: { type: String, required: true }
});

const Requirement = mongoose.model('requirement', requirementSchema);

module.exports = Requirement;