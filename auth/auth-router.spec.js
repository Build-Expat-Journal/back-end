const db = require('../database/dbConfig.js');
const router = require('./auth-router.js');
const {add, findBy} = require('../users/users-model.js');

describe('auth model', function() {
    describe('register()', function() {

        test('should return error for empty user registration', async function(){
            await add({});
            const newUser = await db('users');
            expect(users).toBe(!newUser) 
            // request(router).post('/register').then(res=> {
            //     expect(res.status).toBe(!newUser)
            // })
        });

        test('should register user', async function(){
            let newUser = await add({
                username: 'Bo', 
                password: 'Bo', 
                first_name: 'Bo',
                last_name: 'Bo',
                email: 'Bo',
                country_id: 1,
            });
            return request(router).post('/register').then(res=> {
                expect(res.status).toBe(newUser)
            })
        });

        

    });

    describe('login()', function() {

        test('should login user', async function(){
            
        });
        
        test('should return token', async function(){
            
        });
    });
    
});