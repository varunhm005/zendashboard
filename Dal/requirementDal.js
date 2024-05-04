const requirementModel = require('../Models/requirementModel');
const mongoose = require('mongoose')

async function createRequirement(data) {
    try {
        let payload = new requirementModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Requirement created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function checkRequirementExists(data) {
    try {
        let query = {studentName : data.studentName}

        let result = await requirementModel.aggregate()
            .match(query)

        if (result.length > 0) {
            return { code: 202, status: false, message: "Data already exists", data: result }
        }
        return { code: 200, status: true, message: "Data not found", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getRequirement(req, res) {
    try {

        let result = await requirementModel.find({hasAssigned:0})
        if (!result) {
            return { code: 400, status: false, message: "Failed" }
        }
        return { code: 200, status: true, message: "Success", data: result }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createRequirement, checkRequirementExists, getRequirement };