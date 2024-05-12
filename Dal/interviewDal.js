const interviewModel = require('../Models/interviewModel');
const mongoose = require('mongoose');

async function createInterview(data) {
    try {
        let payload = new interviewModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Interview details created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllInterview() {
    try {
        let result = await interviewModel.find().lean()
        if (result) {
            return { code: 200, status: true, message: "Interview details fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createInterview, getAllInterview };