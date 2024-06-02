const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    // Define your document schema here
    taskName: { type: String, required: true },
    submittedDate: { type: String, required: true },
    taskMark: { type: String, required: false },
    studentComments: { type: String, required: false },
    frontendSourceCode: { type: String, required: false },
    frontendDeployedUrl: { type: String, required: false },
    backendSourceCode: { type: String, required: false },
    backendDeployedUrl: { type: String, required: false },
    graded: { type: Boolean, default: false},

});

const Mentor = mongoose.model('task', taskSchema);

module.exports = Mentor;