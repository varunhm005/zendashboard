const taskDal = require('../Dal/taskDal');
const dashboardDal = require('../Dal/dashboardDal')

async function createTask(req, res) {
    try {

        if(!req.body.sessionDay){
            return res.send({ code: 400, status: false, message: "Session Day is required" })
        }

        let result = await taskDal.createTask(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        let payload  = { taskSubmitted: true, taskId: result.data._id  }

        let updateSession = await dashboardDal.updateSessionTaskStatus(req.body.sessionDay, payload)
        if (!updateSession.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllTask(req, res) {
    try {
        let result = await taskDal.getAllTask()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createTask, getAllTask };