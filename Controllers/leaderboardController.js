const leaderboardDal = require('../Dal/leaderboardDal');

async function createLeaderboard(req, res) {
    try {
        let result = await leaderboardDal.createLeaderboard(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllLeaderboard(req, res) {
    try {
        let result = await leaderboardDal.getAllLeaderboard()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createLeaderboard, getAllLeaderboard };