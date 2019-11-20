const request = require('supertest')
const db = require('../data/helpers/users-helpers')
const server = require('../server')

describe('users router', () => {
    it('GET /users returns a 200', async () => {
        let resStatus = await request(server).get('/api/users').then(res => res.status)
        expect(resStatus).toEqual(200)
    })

    it('GET /users/id returns a 200', async () => {
        let id = 5
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvcmVuem9fdGVzdDEiLCJpYXQiOjE1NzQyNzAxMzMsImV4cCI6MTU3NDI4ODEzM30.A9LHc3icvxqtNQAY81znHC9xHf9xgcfwQbo3RXZtdJY'
        let res = await request(server)
                    .get(`/api/users/${id}`)
                    .set('content-type', 'application/json')
                    .set('authorization', `${token}`)
        let resStatus = await res.status
        
        expect(resStatus).toEqual(200)
    })
})

