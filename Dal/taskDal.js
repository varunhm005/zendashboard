const taskModel = require('../Models/taskModel');
const mongoose = require('mongoose');

async function createTask(data) {
    try {
        let payload = new taskModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Task created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllTask() {
    try {
        let result = await taskModel.find()
        if (result) {
            return { code: 200, status: true, message: "Tasks fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createTask, getAllTask };