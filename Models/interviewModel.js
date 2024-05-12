const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new mongoose.Schema({
    // Define your document schema here
    round: { type: String, required: true },
    interviewDate: { type: String, required: true },
    overallScore: { type: String, required: true },
    recordingUrl: { type: String, required: true },
    comments: { type: String, required: true },
});

const Mentor = mongoose.model('interview', interviewSchema);

module.exports = Mentor;