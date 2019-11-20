const request = require('supertest');
const server = require('../server')
const photosDb = require('../data/helpers/photos-helpers')

describe('photos router', () => {
    it('should return a 201 created for a new photo', async() => {
        let req = await request(server)
        .post('/api/photos')
        .send({
            trip_id: 6,
            user_id: 4,
            img_caption: "Avalon",
            img_url: "https://images.unsplash.com/photo-1516975698824-571e2c952dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        })

        let resStatus = await req.status
        expect(resStatus).toEqual(201)
        
    })
})