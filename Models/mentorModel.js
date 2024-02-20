const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new mongoose.Schema({
    // Define your document schema here
    mentorName: { type: String, required: true },
    assignedStudents: [{ type: mongoose.Types.ObjectId, required: false }],
});

const Mentor = mongoose.model('mentor', mentorSchema);

module.exports = Mentor;