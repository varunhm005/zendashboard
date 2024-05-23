const webkataDal = require('../Dal/webkataDal');
const moment = require('moment-timezone');


async function createWebkata(req, res) {
    try {
        let result = await webkataDal.createWebkata(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllWebkata(req, res) {
    try {
        let result = await webkataDal.getAllWebkata(req.query)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        let startDate = moment(req.query.from)
        let endDate = moment(req.query.to)

        let allDates = [];

        let currentDay = startDate.clone();
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




module.exports = { createWebkata, getAllWebkata };