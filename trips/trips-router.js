const express = require('express');
const db = require('../database/dbConfig.js');
const router = express.Router();
const Trips = require('./trips-model.js');


//GET
router.get('/', (req, res) => {
    Trips
    .then(trips => {
      res.json(trips);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get trips' });
    });
  });
  
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Trips.findById(id)
    .then(trip => {
      if (trip) {
        res.json(trip);
      } else {
        res.status(404).json({ message: 'Could not find trip with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get trips' });
    });
  });
  
// router.get('/:id/posts/:id', (req, res) => {
//     db
//     .select('posts.contents as Post', 'users.username as Username')
//     .from('trips')
//     .join('posts', 'users.id', '=', 'posts.user_id')
//     .then(posts => {
//       res.status(200).json(posts)
//     })
//       .catch(err=> {
//         console.log('Error: ', err)
//         res.status(500).json({error: 'Unexpected error from db.'})
//       });
//   });
  
  
  //POST
router.post('/', (req, res) => {
    const tripData = req.body;
  
    db('trips').insert(tripData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new trip' });
    });
  });
  
 
module.exports = router;
  