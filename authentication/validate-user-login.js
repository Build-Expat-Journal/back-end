module.exports = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ error: 'please include a username and password'})
    } else {
        next()
    }
}