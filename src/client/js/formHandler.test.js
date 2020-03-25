const app = require('../../server/index.js')
const request = require('supertest')

describe('GET /test', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


describe('POST /api', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api')
      .send({url: 'https://google.com'})
      .set('Content-Type', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});