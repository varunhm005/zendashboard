const codekataModel = require('../Models/codekataModel');
const mongoose = require('mongoose');

async function createCodekata(data) {
    try {
        let payload = new codekataModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Pointscreated successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllCodekata(payload) {
    try {
        if (!payload.from && !payload.to) {
            return { code: 204, status: false, message: "From and to date is required" }
        }

        let overallPointsData = codekataModel.aggregate().group({
            _id: null,
            overallPoints: { $sum: "$points" },
        })

        let resultData = codekataModel.aggregate().match({
            date: { $gte: new Date(payload.from) },
            date: { $lte: new Date(payload.to) }
        }
        ).group({
            _id: null,
            totalPoints: { $sum: "$points" },
            data: { $push: "$$ROOT" } // Push all documents into an array
        }).exec()

        let [overallPoints, result] = await Promise.all([overallPointsData, resultData]);


        if (result) {
            return { code: 200, status: true, message: "Codekata details fetched successfully", data: { overallPoints: overallPoints[0].overallPoints, pointDetails: result } }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createCodekata, getAllCodekata };