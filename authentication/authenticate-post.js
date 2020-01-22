const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
        // const token = req.headers.authorization;
        if (req.body.user_id) {
            if (req.decodedJwt.user_id !== req.body.user_id) {
                res.status(401).json({ error: 'Unauthorized' }); 
                console.log(req.decodedJwt)
            } else {
                next()
            }
        }
         else {
            next()
        }
}