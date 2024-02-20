const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
    // Define your document schema here
    studentName: { type: String, required: true },
    hasAssigned: { type: Number, required: false, default: 0 },
    deleted: { type: Boolean }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;