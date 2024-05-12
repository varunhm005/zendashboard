const portfolioDal = require('../Dal/portfolioDal');

async function createPortfolio(req, res) {
    try {
        
        let result = await portfolioDal.createPortfolio(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getPortfolio(req, res) {
    try {
        let result = await portfolioDal.getPortfolio()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createPortfolio, getPortfolio };