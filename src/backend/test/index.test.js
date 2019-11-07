const url = 'http://localhost:4000';
const request = require('supertest');

describe('REST', () => {
  it('should say hello', async () => {
    const res = await request(url).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
  });
});

describe('GraphQL', () => {
  it('should have a greeting', async () => {
    const res = await request(url)
      .post('/graphql')
      .send({
        query: '{ hello }',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data.hello).toEqual('world!');
  });
});
