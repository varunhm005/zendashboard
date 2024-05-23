const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webkataSchema = new mongoose.Schema({
    // Define your document schema here
    date: { type: Date, required: true },
    points: { type: Number },
});

const Webkata = mongoose.model('webkata', webkataSchema);

module.exports = Webkata;