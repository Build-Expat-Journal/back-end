const db = require('../data/helpers/users-helpers')
const tripDb = require('../data/helpers/trips-helpers')
const photosDb = require('../data/helpers/photos-helpers')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const getToken = require('../authentication/getToken')

const validateUser = require('../authentication/validate-user')
const validateUserLogin = require('../authentication/validate-user-login')
const authenticate = require('../authentication/authenticate-middleware')




router.get('/', (req, res) => {
    db.find()
    .then(users => {
        users.forEach(u => delete u.password)
        res.status(200).json(users)
    })
    .catch(err => res.status(500).json({ error: 'Could not get users' }))
})


router.get('/:id', authenticate, async (req, res) => {
    const {id} = req.params;
    let user = await db.findById(id)

    if (user) {
        user.trips = await tripDb.findTripsByUserId(id)
        delete user.password;
        res.status(200).json(user)
    } else {
        res.status(404).json({ error: 'User not found' })
    }
})


router.post('/register', validateUser, async (req, res) => {
    let user = req.body

    // const validateResult = validateUser(user)
    // if (validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash

        let success = await db.addUser(user)
        if (success) {
            const token = getToken(user.username)
            const [id] = success;
            db.findById(id)
                .then(added => res.status(201).json({
                    message:`Thanks for registering, ${added.first_name}`, 
                    token: token,
                    id: id
                }))
                .catch(err => res.status(500).json({ error: 'Could not add user' }))
        } else {
            res.status(500).json({ error: 'error adding user'})
        }
        
    // } else {
    //     res.status(400).json({
    //       message: "Invalid information about the user, see errors for details",
    //       errors: validateResult.errors
    //     });
    //   }
})

router.post('/login', validateUserLogin, async (req, res) => {
    let user = req.body
    // const validateResult = validateUser(user) 

    // if (validateResult.isSuccessful === true) {
        let userToCheck = await db.findByUsername(user.username)
        if (userToCheck && bcrypt.compareSync(user.password, userToCheck.password)) {
            const token = getToken(user.username)
            res.status(200).json({
                message: `Welcome ${user.username}! have a token...`, 
                token,
                id: userToCheck.id
            })
        } else {
            res.status(401).json({ error: 'Invalid credentials'})
        }

    // } else {
    //     res.status(400).json({
    //       message: "Invalid information about the user, see errors for details",
    //       errors: validateResult.errors
    //     });
    //   }
})

// get a user's trips by user id
router.get('/:id/trips', async (req, res) => {
    const {id}= req.params;
    let user = await db.findById(id)
    let userTrips = await tripDb.findTripsByUserId(id)
    if (user && userTrips) {
        if (!userTrips.length) res.status(404).json({ error: 'That user has no trips'})
        else {
            // userTrips.map(async t => {
            //     t.photos = [];
            //     trip_id = t.id
            //     let photos = await photosDb.findPhotosByTripId(trip_id)
            //     photos.map(p => t.photos.push(p))
            //      return res.status(200).json(userTrips)
            // }) 
            return res.status(200).json(userTrips)
        }
    } else if (!user) res.status(404).json({ error: 'That user does not exist'})
    else res.status(500).json({ error: 'Could not get user trips'})
})



module.exports = router;