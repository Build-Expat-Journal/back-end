const db = require('../database/dbConfig.js');
const {add, findBy, remove} = require('./users-model.js');


describe('user model', function() {

//ADD
    describe('add()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should add new user', async function(){
            await add({
                username: 'Dobby', 
                password: 'Dobby', 
                first_name: 'Dobby',
                last_name: 'Socks',
                email: 'Dobby'
            });

            const users = await db('users');
            expect(users).toHaveLength(1);
        });

        test('should add the given user', async function(){
            await add({
                username:'Jimbo Slice',
                password: 'Jimbo Slice', 
                first_name: 'Jimbo',
                last_name: 'Slice',
                email: 'Jimbo Slice'
        });

            const users = await db('users');
            expect(users[0].username).toBe('Jimbo Slice');
        });
    });

// FIND
    describe('findBy()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should find user by filter', async function(){
            await add({
                username: 'Deadpool', 
                password: 'Deadpool', 
                first_name: 'Ryan',
                last_name: 'Reynolds',
                email: 'Chimicangas'
            });
            const users = await db('users');
            await findBy({username: 'Deadpool'});
            expect(users).toHaveLength(1);
            expect(users[0].first_name).toBe('Ryan');
        });
    });


//REMOVE
    describe('remove()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should remove a user', async function(){
            await add({
                username: 'Cat', 
                password: 'Cat', 
                first_name: 'Cat',
                last_name: 'Cat',
                email: 'Cat'
            });

            const users = await db('users');
            expect(users).toHaveLength(1);

            await remove(1);
            expect(users).toHaveLength(0);
            
            await findBy({username: 'Cat'});
            expect(res.status).toBe(404);
        });
    });

});