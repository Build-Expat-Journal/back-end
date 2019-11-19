const router = require('express').Router();
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');
const restricted = require('../auth/restricted-middleware.js');


//GET
router.get('/', (req, res) => {
  Users
  .find()
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // const { id } = req.params.user.id;

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
    res.status(500).json({ message: 'Failed to get user by id' });
  });
});

router.get('/:id/trips', restricted, (req, res) => {
  id = req.params.id;
  db
  .select('trips.*', 'countries.name as country', 'users.username as posted by')
  .from('users')
  .join('trips', 'users.id', '=', 'trips.user_id')
  .join('countries', 'countries.id', '=', 'trips.country_id')
  .join('posts', 'trips.id', '=', 'posts.trip_id')
  .where('trips.user_id', '=', `${id}`)
  .then(trips => {
    res.status(200).json(trips)
  })
    .catch(err=> {
      console.log('Error: ', err)
      res.status(500).json({error: 'Unexpected error from db.'})
    });
});

router.get('/:id/trips/:id', (req, res) => {
  let id=req.params.id
  db
  .select('trips.title as trip', 'posts.title', 'posts.created_at', 'posts.content', 'posts.image' )
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
router.post('/:id/trips', restricted, (req, res) => {
  const tripData = req.body;

  db('trips').insert(tripData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to add new trip.' });
  });
});

router.post('/:id/trips/:id/post', restricted, (req, res) => {
  const postData = req.body;

  db('posts').insert(postData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to add new post.' });
  });
});



//PUT
router.put('/:id/trips/:id', restricted, (req, res) => {
  const tripData = req.body;
  const id = req.params.id;

  db('trips').where({id}).update(tripData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit trip.' });
  });
});

router.put('/:id/trips/:id', restricted, (req, res) => {
  const postData = req.body;
  const id = req.params.id;

  db('posts').where({id}).update(postData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit post.' });
  });
});



//DELETE
router.delete('/:id/trips/:id', restricted, (req, res) => {
  const id = req.params.id;

  db('trips').where({id}).delete()
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit trip.' });
  });
});

router.delete('/:id/trips/:id/posts/:id', restricted, (req, res) => {
  const id = req.params.id;

  db('posts').where({id}).delete()
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit trip.' });
  });
});



module.exports = router;





// router.get('/:id/trips', (req, res) => {
//   id = req.params.id;
//   db
//   .select('trips.*', )
//   .from('trips')
//   .join('users', 'users.id', '=', 'trips.user_id')
//   .where('trips.user_id', '=', `${user.id}`)
//   .then(trips => {
//     res.status(200).json(trips)
//   })
//     .catch(err=> {res.status(500).json({error})});
// });


// router.get('/trips/:id', (req, res) => {
//   const { id } = req.params;

//   Users.findTripById(id)
//   .then(trip => {
//     if(trip) {
//       res.status(200).json(trip)
//     } else {
//       res.status(404).json({ message: 'Could not find trip.' })
//     }
//   })
//     .catch(err=> {
//       console.log('Error: ', err)
//       res.status(500).json({error: 'Unexpected error from db.'})
//     });
// });