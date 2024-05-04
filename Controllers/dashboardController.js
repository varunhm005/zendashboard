const dashboardDal = require('../Dal/dashboardDal');

async function getSessionByDay(req, res) {
    try {

        let day = req.params.day

        let result = await dashboardDal.getAllSession(day)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addSessionDetails(req, res){
    try {

        let result = await dashboardDal.addSessionDetails(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getSessionByDay, addSessionDetails };