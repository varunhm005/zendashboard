const leaveDal = require('../Dal/leaveDal');

async function createLeave(req, res) {
    try {
        
        let result = await leaveDal.createLeave(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllLeave(req, res) {
    try {
        let result = await leaveDal.getAllLeave()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createLeave, getAllLeave };