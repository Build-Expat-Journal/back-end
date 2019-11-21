const router = require('express').Router();
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');
const restricted = require('../auth/restricted-middleware.js');
const {validatePost} = require('./posts-helper.js');


//GET
router.get('/', restricted, (req, res) => {
  Users
  .find()
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    console.log(err);
    res.status(500).json({message: 'Request failed to get users.'});
  });
});

router.get('/:id', restricted, (req, res) => {
  id = req.params.id;

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
    console.log(err);
    res.status(500).json({ message: 'Failed to get user by id' });
  });
});

router.get('/:id/posts', restricted, (req, res) => {
  id = req.params.id;
  db
  .select('posts.*' )
  .from('posts')
  .join('users', 'posts.user_id', '=', 'users.id')
  .where('posts.user_id', '=', `${id}`)
  .then(posts => {
    res.status(200).json(posts)
  })
    .catch(err=> {
      console.log(err);
      res.status(500).json({error: 'Error retrieving posts.'})
    });
});

router.get('/:id/posts/:id', restricted, (req, res) => {
  id=req.params.id;
  db
  .select('posts.*' )
  .from('users')
  .join('posts', 'users.id', '=', 'posts.user_id')
  .where('posts.id', '=', `${id}`)
  .then(posts => {
    res.status(200).json(posts)
  })
    .catch(err=> {
      console.log('Error: ', err)
      res.status(500).json({error: 'Unable to find post.'})
    });
});



//POST
router.post('/:id/posts', restricted, (req, res) => {
  const postData = req.body;
  const validateResults = validatePost(postData);
  
  if(validateResults.isSuccessful === true){
    db('posts').insert(postData)
      .then(ids => {
        res.status(201).json({message: 'Post created.'});
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to add new posts.' });
      });
  } else {
    res.status(400).json({message:'Error:', err: validateResults.errors})
  }
});


//PUT
router.put('/:id', restricted, (req, res) => {
  const userData = req.body;
  const id = req.params.id;

  db('users').where({id}).update(userData)
  .then(ids => {
    res.status(201).json({ message: `Your user information has been updated.`});
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit user information.' });
  });
});

router.put('/:id/posts/:id', restricted, (req, res) => {
  id = req.body.id;
  userId = req.body.id;
  postData = req.body;

  db.select('posts.*')
  .from('users')
  .join('posts', 'users.id', '=', 'posts.user_id')
  .where('posts.user_id', '=', `${userId}`)
  .where('posts.id', '=', `${id}`)
  .update({postData})
  .then(ids => {
    res.status(201).json({ message: `Post updated.` });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to edit post.' });
  });
});


//DELETE
router.delete('/:id', restricted, (req, res) => {
  const id = req.params.id;

  db('users').where({id}).delete()
  .then(ids => {
    res.status(201).json({ message: 'This user has been deleted.' });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user.' });
  });
});

router.delete('/:id/posts/:id', restricted, (req, res) => {
  const id = req.params.id;

  db('posts').where({id}).delete()
  .then(ids => {
    res.status(201).json({message: 'This post has been deleted.'});
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete post.' });
  });
});




module.exports = router;


