process.env.NODE_ENV = 'test'
import { app } from '../src/server/app.js'
import request from 'supertest'

import mongoose from 'mongoose'

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
})
describe('GET /api/books', () => {
  it('should return 200', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  it('should respond with an object', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
    expect(response.body).toEqual(expect.any(Object))
  })
  it('should respond with an object with a property "books" that is an array', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
    expect(response.body.books).toEqual(expect.any(Array))
  })
  it('should respond with an object with a property "page" that is a number', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
    expect(response.body.page).toEqual(expect.any(Number))
  })
  it('should respond with an object with a property "count" that is a number', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
    expect(response.body.count).toEqual(expect.any(Number))
  })
  it('should respond with an object with a property "totalPages" that is a number', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
    expect(response.body.totalPages).toEqual(expect.any(Number))
  })
})

describe('GET /api/books/:id', () => {
  it('should return 200', async () => {
    const response = await request(app)
      .get('/api/books/65dca7eb8d1abbdd2aed37e0')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  it('should respond with an object', async () => {
    const response = await request(app)
      .get('/api/books/65dca7eb8d1abbdd2aed37e0')
      .expect(200)
    expect(response.body).toEqual(expect.any(Object))

  })
})

describe('GET /api/books/filters', () => {
  it('should return 200', async () => {
    const response = await request(app)
      .get('/api/books/filters')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  it('should respond with an object', async () => {
    const response = await request(app)
      .get('/api/books/filters')
      .expect(200)
    expect(response.body).toEqual(expect.any(Object))
  })
  it('should respond with an object with a property "authors" that is an array', async () => {
    const response = await request(app)
      .get('/api/books/filters')
      .expect(200)
    expect(response.body.authors).toEqual(expect.any(Array))
  })
  it('should respond with an object with a property "countries" that is an array', async () => {
    const response = await request(app)
      .get('/api/books/filters')
      .expect(200)
    expect(response.body.countries).toEqual(expect.any(Array))
  })
  it('should respond with an object with a property "years" that is an array', async () => {
    const response = await request(app)
      .get('/api/books/filters')
      .expect(200)
    expect(response.body.years).toEqual(expect.any(Array))
  })
})