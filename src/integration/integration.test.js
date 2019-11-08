const request = require('supertest');

describe('Integration setup', () => {
  it('should have two servers', () => {
    const url1 = 'http://localhost:4001/';
    const url2 = 'http://localhost:4002/';
    const req1 = request(url1).get('/');
    const req2 = request(url2).get('/');
    expect(req1.statusCode).toEqual(200);
    expect(req2.statusCode).toEqual(200);
  });
});
