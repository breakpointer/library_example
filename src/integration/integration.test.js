const request = require('supertest');

describe('Integration setup', () => {
  it('should have two servers', async () => {
    const url1 = 'http://localhost:4040';
    const url2 = 'http://localhost:4041';
    const req1 = await request(url1).get('/');
    const req2 = await request(url2).get('/');
    expect(req1.statusCode).toEqual(200);
    expect(req2.statusCode).toEqual(200);
  });
});
