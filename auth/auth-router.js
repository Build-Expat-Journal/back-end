const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');
const { validateUser } = require('../users/users-helper.js');


router.post('/register', (req, res) => {
    let user = req.body;
    const validateResults = validateUser(user);
  
    if(validateResults.isSuccessful === true){
      const hash = bcrypt.hashSync(user.password, 8); 
      user.password = hash;
  
      Users.add(user)
        .then(saved => {
          req.body.username = saved.username;
          res.status(201).json(saved);
        })
        .catch(error => {
          res.status(500).json(error);
      });
    } else {
      res.status(400).json({message:'Error:', err: validateResults.errors})
    }
  });

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user.username);
        req.body.username = user.username;

        res.status(200).json({
          message: `Welcome back, ${user.username}.`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Username or password is incorrect.' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(username){
  const payload = {username};
  const secret = process.env.JWT_SECRET || 'Travel the World';
  const options = {expiresIn: '2d'};
  return jwt.sign(payload, secret, options);
}

module.exports = router;