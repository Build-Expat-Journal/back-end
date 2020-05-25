const jwt = require('jsonwebtoken');

module.exports = (username, user_id) => {
    const payload = {username, user_id}
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '5hr'}

    return jwt.sign(payload, secret, options)
}