const placementboardDal = require('../Dal/placementboardDal');

async function createPlacementboard(req, res) {
    try {
        let result = await placementboardDal.createPlacementboard(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllPlacementboard(req, res) {
    try {
        let result = await placementboardDal.getAllPlacementboard()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createPlacementboard, getAllPlacementboard };