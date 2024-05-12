const capstoneModel = require('../Models/capstoneModel');
const mongoose = require('mongoose');

async function createCapstone(data) {
    try {
        let payload = new capstoneModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Capstone created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getAllCapstone() {
    try {
        let result = await capstoneModel.find()
        if (result) {
            return { code: 200, status: true, message: "Capstone fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createCapstone, getAllCapstone };