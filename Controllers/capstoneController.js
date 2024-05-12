const capstoneDal = require('../Dal/capstoneDal');

async function createCapstone(req, res) {
    try {
        let result = await capstoneDal.createCapstone(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllCapstone(req, res) {
    try {
        let result = await capstoneDal.getAllCapstone()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createCapstone, getAllCapstone };