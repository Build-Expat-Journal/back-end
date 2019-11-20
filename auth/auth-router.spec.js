const db = require('../database/dbConfig.js');
const request = require('supertest');
const router = require('./auth-router.js');
const {add, findBy} = require('../users/users-model.js');

describe('auth model', function() {
    describe('register()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should return error for empty registration', async function(){
            await add({
                username: '1', 
                password: '', 
                first_name: '',
                last_name: '',
                email: '2',
            });
            return request(router).post('/register').then(res=> {
                expect(res.status).toBe(500)
            })
        });

        test('should register user', async function(){
            let newUser = await add({
                username: 'Bo1', 
                password: 'Bo', 
                first_name: 'Bo',
                last_name: 'Bo',
                email: 'Bo2',
            });
            return request(router).post('/register').then(res=> {
                expect(res.status).toBe(201)
            })
        });

    });
});