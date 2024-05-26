const codekataDal = require('../Dal/codekataDal');
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');


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

        let startDate = req.query.from
        let endDate = req.query.to

        let allDates = [];

        let currentDay = moment(startDate).clone().utc();
        while (currentDay.isSameOrBefore(endDate, 'day')) {
            allDates.push({ date: currentDay.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'), day: currentDay.format('dddd'), points: 0 });
            currentDay.add(1, 'days');
        }

        if (result && result.data && result.data.pointDetails.length > 0) {
            let convertingResult = result.data.pointDetails[0].data

            for (let allDate of allDates) {
                for (let dateObj of convertingResult) {
                    if (moment(allDate.date).isSame(dateObj.date, 'day')) {
                        allDate.points = dateObj.points;
                        allDate._id = dateObj._id;
                        break; // Exit the inner loop once a match is found
                    } else {
                        allDate.points = 0
                    }
                }
            }
            result.data.pointDetails[0].data = allDates
        }else{
            result.data.pointDetails.push({data: allDates})
        }

        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { createCodekata, getAllCodekata };