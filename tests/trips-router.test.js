const request = require('supertest')
const db = require('../data/helpers/trips-helpers')
const server = require('../server')

describe('trips router', () => {
    test('GET /trips returns a 200', async () => {
        let res = await request(server).get('/api/trips')
        let resStatus = await res.status

        expect(resStatus).toEqual(200)
    })

    test('POST /trips should return a 201 created', async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvcmVuem9fdGVzdDEiLCJpYXQiOjE1NzQyNzAxMzMsImV4cCI6MTU3NDI4ODEzM30.A9LHc3icvxqtNQAY81znHC9xHf9xgcfwQbo3RXZtdJY'
        let res = await request(server)
        .post('/api/trips')
        .set('content-type', 'application/json')
        .set('authorization', token)
        .send({
                trip_title: "A super fun vacation",
                country: "Canada",
                city: "Montreal",
                trip_desc: "We went to Montreal. It was fun.",
                user_id: 1
        })
        let resStatus = await res.status
        expect(resStatus).toEqual(201)
    })
})