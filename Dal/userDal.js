const userModel = require('../Models/userModel');
const mongoose = require('mongoose')

async function createUser(data) {
    try {
        let payload = new userModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "User created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getUserByEmailPassword(data) {
    try {

        let query = {email: data.email, password: data.password}
        let result = await userModel.findOne(query,{password:0}).lean()

        if (result) {
            return { code: 200, status: true, message: "User created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createUser, getUserByEmailPassword};