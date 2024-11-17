import request from 'supertest';
import app from "./app"


describe('APP Test ', () => {

  it('GET- /dictionary', async () => {
    const { body } = await request(app).get('/dictionary');
    expect(body.length).toEqual(7);
  })
});