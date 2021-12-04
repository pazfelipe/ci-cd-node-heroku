const request = require('supertest');
const app = require('../index');

describe('GET /', () => {

  afterAll(() => {
    app.close();
  });

  it('responds with Hello World', done => {
    request(app)
      .get('/')
      .expect(200, 'Hello World and a new world!', done);
  });
});