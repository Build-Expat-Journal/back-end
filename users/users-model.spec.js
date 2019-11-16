const db = require('../data/dbConfig.js');
const {insert} = require('./users-model.js');

describe('hobbits model', function() {
    describe('insert()', function() {

        beforeEach(async () => {
            await db('users').truncate();
        })

        test('should insert user', async function(){
            await insert({name:'Dobby'});

            const hobbits = await db('users');
            expect(hobbits).toHaveLength();
        });

        test('should insert the given user', async function(){
            await insert({name:'Jimbo Slice'});

            const hobbits = await db('users');
            expect(hobbits[0].name).toBe('Jimbo Slice');
        });

    });
});