const db = require('../data/helpers/users-helpers')
const tripDb = require('../data/helpers/trips-helpers')
const photosDb = require('../data/helpers/photos-helpers')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const getToken = require('../authentication/getToken')

const validateUser = require('../authentication/validate-user')
const validateUserLogin = require('../authentication/validate-user-login')
const authenticate = require('../authentication/authenticate-middleware')




router.get('/', async (req, res) => {
    try {
        const users = await db.find()
        users.forEach(u => delete u.password)
        res.status(200).json(users)
    }
    catch(err) {
        res.status(500).json({ error: 'Could not get users' })
    } 
})


router.get('/:id', authenticate, async (req, res) => {
    const {id} = req.params;
    try {
        let user = await db.findById(id)

        if (user) {
            user.trips = await tripDb.findTripsByUserId(id)
            delete user.password;
            res.status(200).json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }
})


router.post('/register', validateUser, async (req, res) => {
    try {
        let user = req.body
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash
        let success = await db.addUser(user)
        const token = getToken(user.username)
        const [id] = success;
        const added = await db.findById(id)
        res.status(201).json({
            message:`Thanks for registering, ${added.first_name}`, 
            token: token,
            id: id
        })
    }
    catch(err) {
        res.status(500).json({ error: 'error adding user'})
    }  
})

router.post('/login', validateUserLogin, async (req, res) => {
    let user = req.body
    try {
        let userToCheck = await db.findByUsername(user.username)
        if (userToCheck && bcrypt.compareSync(user.password, userToCheck.password)) {
            const token = getToken(user.username, userToCheck.id)
            res.status(200).json({
                message: `Welcome ${user.username}! have a token...`, 
                token,
                id: userToCheck.id
            })
        } else {
            res.status(401).json({ error: 'Invalid credentials'})
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// get a user's trips by user id
router.get('/:id/trips', async (req, res) => {
    const {id}= req.params;
    try {
        let user = await db.findById(id)
        let userTrips = await tripDb.findTripsByUserId(id)
        if (user && userTrips) {
            if (!userTrips.length) {
                res.status(404).json({ error: 'That user has no trips'})
            }
            else {
                    const map = async (arr, callback) => {
                        let new_arr = [];
                        for (let x = 0; x < arr.length; x++) {
                            let id = arr[x].id
                            new_arr[x] = arr[x]
                            new_arr[x].photos = await callback(id)
                        }
                        return res.status(200).json(new_arr)
                    }
                    map(userTrips, photosDb.findPhotosByTripId)    
            }
        } else res.status(404).json({ error: 'That user does not exist'})
    }
    catch (err) {
        res.status(500).json({ error: 'Could not get user trips'})
    } 
})



module.exports = router;