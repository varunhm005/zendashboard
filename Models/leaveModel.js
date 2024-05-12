const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveSchema = new mongoose.Schema({
    // Define your document schema here
    days: { type: String, required: true },
    leaveOn: { type: String, required: true },
    reason: { type: String, required: true },
}, {
    timestamps: true // This adds createdAt and updatedAt fields
});

const Leave = mongoose.model('leave', leaveSchema);

module.exports = Leave;