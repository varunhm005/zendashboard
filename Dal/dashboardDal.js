const dashboardModel = require('../Models/dashboardModel');
const mongoose = require('mongoose')

async function addSessionDetails(data) {
    try {
        let payload = new dashboardModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Session created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllSession(day) {
    try {
        let result = await dashboardModel.aggregate()
            .match({ sessionDay: +day })
            .lookup({ from: 'tasks', localField: 'taskId', foreignField: '_id', as: 'tasks' })
            .exec()

        if (result.length > 0) {
            return { code: 200, status: true, message: "Session fetched successfully", data: result[0] }
        }
        
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function updateSessionTaskStatus(day, payload) {
    try {
        let findQuery = { sessionDay: day }

        let update = payload

        let result = await dashboardModel.findOneAndUpdate(findQuery, { $set: update }, { returnDocument: "after" })
        if (result) {
            return { code: 200, status: true, message: "Session updated successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { addSessionDetails, getAllSession, updateSessionTaskStatus };