const request = require('supertest')
const db = require('../data/helpers/users-helpers')
const server = require('../server')

describe('users router', () => {
    it('GET /users returns a 200', async () => {
        let resStatus = await request(server).get('/api/users').then(res => res.status)
        expect(resStatus).toEqual(200)
    })

    it('GET /users/id returns a 200', async () => {
        let id = 4
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbV9zaW1wc29uNyIsImlhdCI6MTU3NDE4MzY0NywiZXhwIjoxNTc0MjAxNjQ3fQ.UHpFjcdbbJU9GKyod5kwIZVxiJVe2DQjNL7bGGTuHxc'
        let res = await request(server)
                    .get(`/api/users/${id}`)
                    .set('content-type', 'application/json')
                    .set('authorization', `${token}`)
        let resStatus = await res.status
        
        expect(resStatus).toEqual(200)
    })
})

