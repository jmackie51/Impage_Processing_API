//import imageResizer from '../../utilities/Image_Resizer';
import express from 'express';
import supertest from 'supertest';
import app from '../../index';
import resizingUtility from '../../utilities/Image_Resizer';
import ResolvePath from 'path';

const request = supertest(app);

//Test that we do not get any errors when we request an image to be resized via the endpoint
describe('2. Test the Image Resizing functionality', () => {
    
  const bPath = ResolvePath.resolve(__dirname, '../../../images');
    
  it('Expect the resizing endpoint not to throw an error', async () => {
    const response = await request.get(
      '/api/resize/?filename=fjord&width=300&height=207'
    );
    expect(response.error).toBe(false);
    //done();
  });

  //Test that we do NOT get any errors when we call the resizing utility
  it('expects resizingUtility(`${bPath}/full/fjord.jpg`, `${bPath}/thumbnails/fjord_300_300.jpg`, 300,300) to be resolved', async () => {
    await expectAsync(
      resizingUtility(
        `${bPath}/full/fjord.jpg`,
        `${bPath}/thumbnails/fjord_300_300.jpg`,
        300,
        300
      )
    ).toBeResolved();
  });

  //Test that we DO get errors when we call the resizing utility with the name of an image that doesnt exist
  it('expects resizingUtility(`${bPath}/full/frd.jpg`, `${bPath}/thumbnails/fjd_300_300.jpg`, 300,300) to be rejected', async () => {
    await expectAsync(
      resizingUtility(
        `${bPath}/full/frd.jpg`,
        `${bPath}/thumbnails/fjd_300_300.jpg`,
        300,
        300
      )
    ).toBeRejected();
  });
});
