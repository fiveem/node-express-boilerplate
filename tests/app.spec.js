'use strict'

const request = require('supertest')
const app = require('../src/app')

describe('App Health', () => {
    it('responds with json', done => {
        request(app)
            .get('/')
            .expect(200, done)
    })
})