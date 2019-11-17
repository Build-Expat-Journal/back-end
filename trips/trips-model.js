
const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById
};

function find(){
    return db.select('*').from('trips');
    //return db('users')
}

function findById(id){
    return db('trips')
        .where({ id })
        .first();
}