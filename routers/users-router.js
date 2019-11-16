const db = require('../data/helpers/users-helpers')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const getToken = require('../authentication/getToken')

const validateUser = require('../authentication/validate-user')




router.get('/', (req, res) => {
    db.find()
    .then(users => {
        users.forEach(u => delete u.password)
        res.status(200).json(users)
    })
    .catch(err => res.status(500).json({ error: 'Could not get users' }))
})


router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.findById(id)
    .then(user => {
        delete user.password
        res.status(200).json(user)
        })
    .catch(err => res.status(500).json({ error: 'Could not get user' }))

})


router.post('/register', async (req, res) => {
    let user = req.body

    const validateResult = validateUser(user)
    if (validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash

        let success = await db.addUser(user)
        if (success != -1) {
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
            res.status(400).json({ error: 'That username is taken'})
        }
        
    } else {
        res.status(400).json({
          message: "Invalid information about the user, see errors for details",
          errors: validateResult.errors
        });
      }
})

router.post('/login', async (req, res) => {
    let user = req.body
    const validateResult = validateUser(user) 

    if (validateResult.isSuccessful === true) {
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

    } else {
        res.status(400).json({
          message: "Invalid information about the user, see errors for details",
          errors: validateResult.errors
        });
      }
})




module.exports = router;