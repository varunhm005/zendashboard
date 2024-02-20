const mentorModel = require('../Models/mentorModel');
const mongoose = require('mongoose');

async function createMentor(data) {
    try {
        let payload = new mentorModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Mentor created successfully", data: result }
        }
        return { code: 202, status: false, message: "Error while creating mentor", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


async function assignStudent(id, studentId) {
    try {
        let result = await mentorModel.findOneAndUpdate(
            { _id: id },
            { $addToSet: { assignedStudents: studentId } },
            {
                returnDocument: "after", // or "before" to return the original document
                projection: { _id: 0, assignedStudents: 1, mentorName: 1 }, // optional projection
            }
        );
        if (result) {
            return { code: 200, status: true, message: "Success", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function getStudentByMentorId(id) {
    try {
        let result = await mentorModel.aggregate()
            .match({ _id: new mongoose.Types.ObjectId(id) })
            .lookup({
                from: 'students',
                localField: 'assignedStudents',
                foreignField: '_id',
                as: "studentDetails"
              })
              .project({
                _id:1,
                mentorName:1,
                studentDetails:1
              })
        if (result) {
            return { code: 200, status: true, message: "Success", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createMentor, assignStudent, getStudentByMentorId };