const request = require('supertest');
const server = require('./server.js');

describe('server', function(){
    describe('GET /', function(){

        test('should return 200 OK', function(){
            return request(server).get('/').then(res=>{
                expect(res.status).toBe(200);
            })
        });

        test('should set db_env to testing', function(){
            expect(process.env.DB_ENV).toBe('testing');
        });


        test('should get jokes', function(){
            return request(server).get('/jokes').then(res=>{
                expect(res.body).toBeDefined;
            })
        });

    })
});