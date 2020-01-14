const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
        const token = req.headers.authorization 
        if (req.decodedJwt.id !== req.body.user_id) {
            res.status(401).json({ error: 'Unauthorized' });
            console.log(req.decodedJwt)
        } else {
            next()
        }
}