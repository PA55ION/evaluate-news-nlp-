
// const supertest = require('supertest');
// const app = require('../../server/index');
// const request = supertest(app);


// it('gets the test endpoint', async done => {
//   const response = await request.get('/test')

//   expect(response.status).toBe(200)
//   expect(response.send).toBe(mockAPIResponse)
//   done()
// })


// describe('Testing the test path', () => {
//   test('It should get test path',async() => {
//       const response = await request.get('/test');
//       expect(response.statusCode).toBe(200);
//   });
// });

// it('Testing to see if Jest works', () => {
//   expect(1).toBe(1)
// })


const request = require('supertest')
const app = require('../../server/index')
describe('Post Endpoints', () => {
  test('should create a new post', async () => {
    const res = await request(app)
      .post('/api')
      .send({
        url: url
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('post')
  })
})