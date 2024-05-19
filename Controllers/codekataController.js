const codekataDal = require('../Dal/codekataDal');

async function createCodekata(req, res) {
    try {
        let result = await codekataDal.createCodekata(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllCodekata(req, res) {
    try {
        let result = await codekataDal.getAllCodekata(req.query)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createCodekata, getAllCodekata };