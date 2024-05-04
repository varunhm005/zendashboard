var jwt = require('jsonwebtoken');

const myMiddleware = (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ error: 'Token is missing' });
        }
    
        try {
            const decoded = jwt.verify(token, 'studentDashboard');
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(403).json({ error: 'Invalid token' });
        }
  };
  
  module.exports = { myMiddleware };