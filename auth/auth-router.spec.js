const db = require('../database/dbConfig.js');
const request = require('supertest');
const router = require('./auth-router.js');
const {add, findBy} = require('../users/users-model.js');

describe('auth model', function() {
    describe('POST /register', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should respond with JSON', async function(){
            request(router)
                .post('/register')
                .expect('Content-Type', /json/)
                .send({username: 'Cat', 
                    password: 'Cat', 
                    first_name: 'Cat',
                    last_name: 'Cat',
                    email: 'Cat'})
                .expect(200)
                .end(function(err, res) {
                if (err) throw err;
            });

        });

    });
});
