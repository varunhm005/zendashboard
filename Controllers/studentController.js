const studentDal = require('../Dal/studentDal');

async function createStudent(req, res) {
    try {

        let checkIfExists =  await studentDal.checkStudentExists(req.body)   
        
        if(!checkIfExists.status){
            return res.send({ code: 205, status: true, message: checkIfExists.message })
        }

        let result = await studentDal.createStudent(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getStudent(req, res) {
    try {

        let result = await studentDal.getStudent(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createStudent, getStudent };