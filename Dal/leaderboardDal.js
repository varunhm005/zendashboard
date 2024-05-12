const leaderboardModel = require('../Models/leaderboardModel');
const mongoose = require('mongoose');

async function createLeaderboard(data) {
    try {
        let payload = new leaderboardModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Leaderboard created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllLeaderboard() {
    try {
        let result = await leaderboardModel.find()
        if (result) {
            return { code: 200, status: true, message: "Leaderboard fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createLeaderboard, getAllLeaderboard };