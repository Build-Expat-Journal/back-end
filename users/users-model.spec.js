const db = require('../database/dbConfig.js');
const {insert} = require('./users-model.js');

describe('user model', function() {
    describe('insert()', function() {

        beforeEach(async () => {
            await db('users').truncate();
        })

        test('should insert user', async function(){
            await insert({name:'Dobby'});

            const users = await db('users');
            expect(users).toHaveLength();
        });

        test('should insert the given user', async function(){
            await insert({name:'Jimbo Slice'});

            const users = await db('users');
            expect(users[0].name).toBe('Jimbo Slice');
        });

    });
});