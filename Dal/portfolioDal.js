const portfolioModel = require('../Models/portfolioModel');
const mongoose = require('mongoose');

async function createPortfolio(data) {
    try {

        let payload = new portfolioModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Portfolio created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getPortfolio() {
    try {
        let result = await portfolioModel.findOne().lean()
        if (result) {
            return { code: 200, status: true, message: "Portfolio fetched successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


module.exports = { createPortfolio, getPortfolio };