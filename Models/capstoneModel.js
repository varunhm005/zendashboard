const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capstoneSchema = new mongoose.Schema({
    // Define your document schema here
    capstoneName: { type: String, required: true },
    submittedDate: { type: String },
    capstoneMark: { type: String },
    description: { type: String},
    taskTitle: { type: String },
    specifications: [{ type: String }],
    requirements: [{ type: String }],
    submitDescription: [{ type: String }],
    references: [{ type: String }],
    termsAndConditions: [{ type: String }],
    frontEndCode: { type: String },
    backendCode: { type: String },
    frontEndUrl: { type: String },
    backEndUrl: { type: String },
    comments: { type: String }
});

const Mentor = mongoose.model('capstone', capstoneSchema);

module.exports = Mentor;