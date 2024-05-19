const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codekataSchema = new mongoose.Schema({
    // Define your document schema here
    date: { type: Date, required: true },
    points: { type: Number },
});

const Codekata = mongoose.model('codekata', codekataSchema);

module.exports = Codekata;