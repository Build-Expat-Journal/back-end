const db = require('../database/dbConfig.js');
const {insert} = require('./auth-model.js');

describe('auth model', function() {
    describe('insert()', function() {

        beforeEach(async () => {
            await db('auth').truncate();
        })

        test('should return token', async function(){
            
        });

        test('should pass token', async function(){
            
        });

    });
});