const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    // Define your document schema here
    sessionDay: { type: Number, required: true },
    sessionVideoUrl: { type: String, required: true },
    sessionName: { type: String, required: true },
    sessionDescription: { type: String, required: true },
    sessionContents: { type: String, required: true },
    sessionPreRead: { type: String, required: false },
    activity: {type: Boolean, default: false},
    taskName: { type: String, required: true },
    taskTags: { type: String, required: true },
    frontEnd: {type: Boolean, default: false},
    backEnd: {type: Boolean, default: false},
    taskSubmitted: {type: Boolean, default: false}
});

const SessionRoadMap = mongoose.model('sessionRoadMap', dashboardSchema);

module.exports = SessionRoadMap;