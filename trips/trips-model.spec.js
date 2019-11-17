const db = require('../database/dbConfig.js');
const {insert} = require('./trips-model.js');

describe('trips model', function() {
    describe('insert()', function() {

        beforeEach(async () => {
            await db('trips').truncate();
        })

        test('should insert trip name', async function(){
            await insert({name:'Exploring Dubai'});

            const trips = await db('trips');
            expect(trips).toHaveLength(1);
        });

        test('should insert the given trip name', async function(){
            await insert({name:'Exploring Dubai'});

            const trips = await db('users');
            expect(trips[0].name).toBe('Jimbo Slice');
        });

        test('should return the given trip location', async function(){
            
        });

    });
});