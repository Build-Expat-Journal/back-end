module.exports = (req, res, next) => {
    if (!req.body.trip_id || !req.body.user_id || !req.body.img_url) {
        res.status(400).json({ error: 'Please include trip_id, user_id and img_url'})
    } else {
        next()
    }
}