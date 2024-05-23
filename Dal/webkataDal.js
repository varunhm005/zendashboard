const webkataModel = require('../Models/webkataModel');
const mongoose = require('mongoose');

async function createWebkata(data) {
    try {
        let payload = new webkataModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Points created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllWebkata(payload) {
    try {
        if (!payload.from && !payload.to) {
            return { code: 204, status: false, message: "From and to date is required" }
        }

        let overallPointsData = webkataModel.aggregate().group({
            _id: null,
            overallPoints: { $sum: "$points" },
        })

        let resultData = webkataModel.aggregate().match({
            $and: [
                { date: { $gte: new Date(payload.from) } },
                { date: { $lte: new Date(payload.to) } }
            ]
        }
        ).group({
            _id: null,
            totalPoints: { $sum: "$points" },
            data: { $push: "$$ROOT" } // Push all documents into an array
        }).exec()

        let [overallPoints, result] = await Promise.all([overallPointsData, resultData]);


        if (result) {
            return { code: 200, status: true, message: "Webkata details fetched successfully", data: { overallPoints: overallPoints[0].overallPoints, pointDetails: result } }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createWebkata, getAllWebkata };