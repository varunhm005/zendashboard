const userDal = require('../Dal/userDal');
var md5 = require('md5');
var jwt = require('jsonwebtoken');



async function login(req, res) {
    try {

        let password = req.body.password
        let email = req.body.email

        if(password){
            password = md5(password)
        }

        let payload  = {email, password}

        let result = await userDal.getUserByEmailPassword(payload)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: "Email or password is incorrect" })
        }

        let token = jwt.sign({
            data: result._id
          }, 'studentDashboard', { expiresIn: '1h' });


        return res.send({ code: 200, status: true, message: result.message, data: {...result.data,token}})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createUser(req, res) {
    try {
        
        if(req.body.password){
            req.body.password = md5(req.body.password)
        }

        let result = await userDal.createUser(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { login, createUser };