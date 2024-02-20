const mentorDal = require('../Dal/mentorDal');
const studentDal = require('../Dal/studentDal');

async function createMentor(req, res) {
    try {
        let result = await mentorDal.createMentor(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function assignStudent(req, res) {
    try {
        let mentorId = req.params.mentorId
        let result = await mentorDal.assignStudent(mentorId, req.body.studentId)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        let updateStatus = await studentDal.updateAssignedStatus(req.body.studentId)
        if(!updateStatus.status){
            return res.send({ code: 400, status: false, message: result.message })
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getStudentByMentorId(req, res) {
    try {
        let mentorId = req.params.mentorId
        let result = await mentorDal.getStudentByMentorId(mentorId)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createMentor, assignStudent, getStudentByMentorId };