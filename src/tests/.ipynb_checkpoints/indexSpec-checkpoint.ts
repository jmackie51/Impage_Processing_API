import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// Test that we get a reponse from the /api endpoint
describe('1. Test api response', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    // done();
  });
});
