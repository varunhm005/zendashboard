const queryDal = require('../Dal/queryDal');

async function createQuery(req, res) {
    try {
        
        let result = await queryDal.createQuery(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getAllQuery(req, res) {
    try {
        let result = await queryDal.getAllQuery()
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }

        let datas = result.data

        datas = datas.map(data => ({
            ...data,
            createdAt: formatDate(data.createdAt)
        }));

        return res.send({ code: 200, status: true, message: result.message, data: datas })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Get components of the date
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    // Format the date string
    const formattedDate = `${month}/${day}/${year}, ${formattedHours}:${minutes} ${ampm}`;

    return formattedDate;
}

// Example usage:
const dateString = '2024-05-12T09:43:02.622Z';
const formattedDate = formatDate(dateString);





module.exports = { createQuery, getAllQuery };