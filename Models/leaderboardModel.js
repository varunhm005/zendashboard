const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new mongoose.Schema({
    // Define your document schema here
    rank: { type: String, required: true },
    name: { type: String, required: true },
    batch: { type: String, required: true },
    learning: { type: String, required: true },
});

const Mentor = mongoose.model('leaderboard', leaderboardSchema);

module.exports = Mentor;