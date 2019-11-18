const router = require('express').Router();
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');
const restricted = require('../auth/authenticate-middleware.js');


//GET
//users
router.get('/', (req, res) => {
  Users
  .findBy()
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

//user
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users
  .findById(id)
  .then(user => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

//user's trips
router.get('/:id/trips', (req, res) => {
  id = req.params.id;
  db
  .select('trips.*', 'countries.name as country', 'users.username as posted by')
  .from('users')
  .join('trips', 'users.id', '=', 'trips.user_id')
  .join('countries', 'countries.id', '=', 'trips.country_id')
  // .leftJoin('posts', 'trips.id', '=', 'posts.trip_id')
  .where('trips.user_id', '=', `${id}`)
  .then(trips => {
    res.status(200).json(trips)
  })
    .catch(err=> {
      console.log('Error: ', err)
      res.status(500).json({error: 'Unexpected error from db.'})
    });
});

//user trip's posts
router.get('/:id/trips/:id', (req, res) => {
  let id=req.params.id
  db
  .select('posts.*', 'trips.title as trip', )
  .from('trips')
  .join('posts', 'trips.id', '=', 'posts.trip_id')
  .where('trip_id', '=', `${id}`)
  .then(posts => {
    res.status(200).json(posts)
  })
    .catch(err=> {
      console.log('Error: ', err)
      res.status(500).json({error: 'Unexpected error from db.'})
    });
});



//POST
//new trip
router.post('/:id/trips', (req, res) => {
  const tripData = req.body;

  db('trips').insert(tripData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to add new trip.' });
  });
});

//new post
router.post('/:id/trips/:id/post', (req, res) => {
  const postData = req.body;

  db('posts').insert(postData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to add new post.' });
  });
});


module.exports = router;