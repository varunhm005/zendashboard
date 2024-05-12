const leaveModel = require('../Models/leaveModel');
const mongoose = require('mongoose');

async function createLeave(data) {
    try {

        let payload = new leaveModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Leave application created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllLeave() {
    try {
        let result = await leaveModel.find().lean()
        if (result) {
            return { code: 200, status: true, message: "Leave fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createLeave, getAllLeave };