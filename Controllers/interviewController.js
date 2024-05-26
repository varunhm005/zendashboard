const interviewDal = require('../Dal/interviewDal');

async function createInterview(req, res) {
    try {
        let result = await interviewDal.createInterview(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllInterview(req, res) {
    try {
        let result = await interviewDal.getAllInterview()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        let datas = result.data

        let count = 0
        datas = datas.map(data => ({
            ...data,
            id: count+1
        }));

        return res.send({ code: 200, status: true, message: result.message, data: datas })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createInterview, getAllInterview };