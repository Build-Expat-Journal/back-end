const db = require('../data/helpers/users-helpers')

module.exports = validateUser;


function validateUser(user) {
    let errors = []

    if (!user.username) {
        errors.push('Please include a username')
    } else if (!user.password) {
        errors.push('Please provide a password')
    }

    return {
        isSuccessful: !errors.length,
        errors
    }
}