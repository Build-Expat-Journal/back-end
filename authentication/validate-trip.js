module.exports = validateTrip;

function validateTrip(req, res, next){
    if (!req.body.country || !req.body.user_id) {
        res.status(400).json({ error: 'Please include a country and a user ID'})
    } else {
        next()
    }
}