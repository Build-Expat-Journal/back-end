const db = require('../data/helpers/users-helpers')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const getToken = require('../authentication/getToken')

const validateUser = require('../authentication/validate-user')




router.get('/', (req, res) => {
    db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: 'Could not get users' }))
})


router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.findById(id)
    .then(user => res.status(200).json(user))
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




module.exports = router;