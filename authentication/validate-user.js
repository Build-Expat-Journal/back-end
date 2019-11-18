const db = require('../data/helpers/users-helpers')

module.exports = validateUser;


async function validateUser(req, res, next) {
    // let errors = []
    let usernameExists = await db.findByUsername(req.body.username)
    if (!req.body.username) {
        res.status(400).json('Please include a username')
    } else if (!req.body.password) {
        res.status(400).json('Please include a username')
    } else if (usernameExists) {
       res.status(400).json({ error: 'Username is taken'}) 
    }
    else {
        next()
    }
}