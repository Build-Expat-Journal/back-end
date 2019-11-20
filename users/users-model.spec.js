const db = require('../database/dbConfig.js');
const {add, findBy, remove} = require('./users-model.js');

describe('user model', function() {

//ADD
    describe('add()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should add new user', async function(){
            await add({name:'Dobby'});

            const users = await db('users');
            expect(users).toHaveLength(1);
        });

        test('should add the given user', async function(){
            await add({name:'Jimbo Slice'});

            const users = await db('users');
            expect(users[0].name).toBe('Jimbo Slice');
        });
    });

//FIND
    describe('findBy()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should find user by filter', async function(){
            await add({name:'Dobby'});
            await findBy('Dobby');

            const user = await db('users');
            expect(user).toHaveReturnedWith('Dobby');
        });
    });


//REMOVE
    describe('remove()', function() {

        beforeEach(async () => {await db('users').truncate();})

        test('should remove a user', async function(){
            await add({name:'Dobby'});
            await remove({name:'Dobby'});
            await findBy({Dobby});

            const users = await db('users');
            expect(users).toHaveLength(0);
            expect(users).toBe(!'Dobby');
        });
    });


});