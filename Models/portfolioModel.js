const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new mongoose.Schema({
    // Define your document schema here
    gitHubUrl: { type: String, required: true },
    portfolioUrl: { type: String, required: true },
    resumeUrl: { type: String, required: true },
}, {
    timestamps: true // This adds createdAt and updatedAt fields
});

const Leave = mongoose.model('portfolio', portfolioSchema);

module.exports = Leave;