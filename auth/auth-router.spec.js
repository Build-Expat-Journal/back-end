
const request = require('supertest');
const router = require('./auth-router.js');

// beforeEach(async () => {await db('users').truncate();})

describe('auth model', async function() {

    describe('POST /register and /login', function() {
        test('should respond with JSON', function(){
            request(router)
                .post('/register')
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .send({
                    username: 'Cat', 
                    password: 'Cat', 
                    first_name: 'Cat',
                    last_name: 'Cat',
                    email: 'Cat'
                })
                .expect(200)
                .end(function(err, res) {
                if (err) throw err;
            })
        });

        test('Should return a response at login.', function() {
            request(router)
              .post('/login')
              .set('Accept', 'application/json')
              .send({
                  username: 'Cat', 
                  password: 'Cat'
                }) 
              .expect(200)
              .expect(function(res) {
                res.body = 'Welcome back, Cat.';
              })
              .end(function(err, res) {
                if (err) throw err;
          });

        });
    });
});
