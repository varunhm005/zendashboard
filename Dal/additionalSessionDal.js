const additionalSessionModel = require('../Models/additionalSessionModel');
const mongoose = require('mongoose');

async function createAdditionals(data) {
    try {
        let payload = new additionalSessionModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Additional session data created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllAdditionals() {
    try {
        let result = await additionalSessionModel.find()
        if (result) {
            return { code: 200, status: true, message: "Additional sessions fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createAdditionals, getAllAdditionals };