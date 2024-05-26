const additionalSessionDalDal = require('../Dal/additionalSessionDal');

async function createAdditionals(req, res) {
    try {
        let result = await additionalSessionDalDal.createAdditionals(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllAdditionals(req, res) {
    try {
        let result = await additionalSessionDalDal.getAllAdditionals()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createAdditionals, getAllAdditionals };