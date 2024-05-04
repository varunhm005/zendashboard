const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Define your document schema here
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, default: "ACTIVE", enum: ['ACTIVE', 'INACTIVE']}
});

const User = mongoose.model('user', userSchema);

module.exports = User;