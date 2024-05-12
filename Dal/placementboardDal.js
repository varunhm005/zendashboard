const placementboardModel = require('../Models/placementboardModel');
const mongoose = require('mongoose');

async function createPlacementboard(data) {
    try {
        let payload = new placementboardModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Placementboard created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllPlacementboard() {
    try {
        let result = await placementboardModel.find()
        if (result) {
            return { code: 200, status: true, message: "Placementboard fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createPlacementboard, getAllPlacementboard };