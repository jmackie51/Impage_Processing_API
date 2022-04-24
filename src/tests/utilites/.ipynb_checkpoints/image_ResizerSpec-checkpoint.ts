import imageResizer from '../../utilities/Image_Resizer';
import express from 'express';
import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

//Test that we do not get any errors when we request an image to be resized
describe('2. Test the Image Resize Endpoint', () => {
  it('Expect the resizer not to throw an error', async () => {
    const response = await request.get(
      '/api/resize/?filename=fjord&width=300&height=207'
    );
    expect(response.error).toBe(false);
    //done();
  });
});
