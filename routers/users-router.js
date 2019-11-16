const db = require('../data/helpers/users-helpers')
const router = require('express').Router()




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


router.post('/register', (req, res) => {
    let user = req.body
    db.addUser(user)
    .then(user_id => {
        const [id] = user_id;
        db.findById(id)
        .then(added => res.status(200).json(added))
        .catch(err => console.log(err))
    })
    .catch(err => res.status(500).json({ error: 'Could not add user' }))
})




module.exports = router;