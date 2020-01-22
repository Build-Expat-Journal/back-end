module.exports = validateTrip;

function validateTrip(req, res, next){
    if (!req.body.country) {
        res.status(400).json({ error: 'Please include a country'})
    } else {
        next()
    }
}