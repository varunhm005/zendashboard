const studentModel = require('../Models/studentModel');
const mongoose = require('mongoose')

async function createStudent(data) {
    try {
        let payload = new studentModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Student created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function checkStudentExists(data) {
    try {
        let query = {studentName : data.studentName}

        let result = await studentModel.aggregate()
            .match(query)

        if (result.length > 0) {
            return { code: 202, status: false, message: "Data already exists", data: result }
        }
        return { code: 200, status: true, message: "Data not found", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function updateAssignedStatus(studentId) {
    try {
        let result = await studentModel.findOneAndUpdate(
            { _id: studentId },
            { $set : { hasAssigned: 1 } }
         );
        if (result) {
            return { code: 200, status: true, message: "Success", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getStudent(req, res) {
    try {

        let result = await studentModel.find({hasAssigned:0})
        if (!result) {
            return { code: 400, status: false, message: "Failed" }
        }
        return { code: 200, status: true, message: "Success", data: result }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createStudent, checkStudentExists, updateAssignedStatus, getStudent };