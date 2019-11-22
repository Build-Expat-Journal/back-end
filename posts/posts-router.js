const router = require('express').Router();
const Posts = require('./users-model.js');
const db = require('../database/dbConfig.js');
const restricted = require('../auth/restricted-middleware.js');


//----->GET
//return all posts
router.get('/', restricted, (req, res) => {
    Posts
    .findPosts()
    .then(posts => {
      res.json(posts);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({message: 'Request failed to get posts.'});
    });
});

//get posts by city
router.get('/city/:id', restricted, (req, res) => {
    Posts
    .findPostsByCity()
    .then(posts => {
      res.json(posts);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({message: 'Request failed to get posts.'});
    });
});

//get posts by country
router.get('/country/:id', restricted, (req, res) => {
    Posts
    .findPostsByCountry()
    .then(posts => {
      res.json(posts);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({message: 'Request failed to get posts.'});
    });
});

  