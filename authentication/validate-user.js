const db = require('../data/helpers/users-helpers')

module.exports = validateUser;


function validateUser(req, res, next) {
    // let errors = []

    if (!req.body.username) {
        res.status(400).json('Please include a username')
    } else if (!req.body.password) {
        res.status(400).json('Please include a username')
    } else {
        next()
    }
    // return {
    //     isSuccessful: errors.length === 0,
    //     errors
    // }
}