const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        const secret = process.env.JWT_SECRET || 'this is super secret, crack it if you dare';

        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Invalid credentials!'})
            }
            else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({ error: 'No authorization provided' });
    }
}