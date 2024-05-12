const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new mongoose.Schema({
    // Define your document schema here
    queryId: { type: String, required: true },
    category: { type: String, required: true },
    prefferedLanguage: { type: String, required: true },
    queryTitle: { type: String, required: true },
    queryDescription: { type: String, required: true },
    from: { type: String, required: true },
    till: { type: String, required: true },
    assignedTo: { type: String, required: false },
}, {
    timestamps: true // This adds createdAt and updatedAt fields
});

const Query = mongoose.model('query', querySchema);

module.exports = Query;