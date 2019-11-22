const router = require('express').Router();
const Posts = require('./posts-model.js');
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
    id = req.params.id;
    Posts
    .findPostsByCity(id)
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
    id = req.params.id;
    Posts
    .findPostsByCountry(id)
    .then(posts => {
      res.json(posts);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({message: 'Request failed to get posts.'});
    });
});

module.exports = router;

  