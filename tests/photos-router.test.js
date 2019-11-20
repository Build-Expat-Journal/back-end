const request = require('supertest');
const server = require('../server')
const photosDb = require('../data/helpers/photos-helpers')

describe('photos router', () => {
    it('should return a 201 created for a new photo', async() => {
        let res = await request(server)
        .post('/api/photos')
        .send({
            trip_id: 6,
            user_id: 4,
            img_caption: "Avalon",
            img_url: "https://images.unsplash.com/photo-1516975698824-571e2c952dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        })

        let resStatus = await res.status
        expect(resStatus).toEqual(201)
        
    })

    it('should return a 200 deleted and return a deleted message', async() => {
        let id = 18
        let res = await request(server).del(`/api/photos/${id}`)
        let resStatus = res.status
       

        expect(resStatus).toEqual(200)
        expect(res.body.message).toMatch(/deleted/i)
    })
})