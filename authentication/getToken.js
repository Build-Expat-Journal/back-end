const jwt = require('jsonwebtoken');

module.exports = (username) => {
    const payload = {username}
    const secret = process.env.JWT_SECRET || 'this is super secret, crack it if you dare';
    const options = { expiresIn: '5hr'}

    return jwt.sign(payload, secret, options)
}