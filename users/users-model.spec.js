const db = require('../database/dbConfig.js');
const {add, find, remove} = require('./users-model.js');

describe('user model', function() {
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
});