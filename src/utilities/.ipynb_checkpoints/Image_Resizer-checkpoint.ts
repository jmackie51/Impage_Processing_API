import sharp from 'sharp';

const resizingUtility = async (fullImagePath: string, thumbImagePath: string,  width: number,  height: number): Promise<void> => {
  let retString: string;
  try {
    await sharp(fullImagePath).resize(width, height).toFile(thumbImagePath); //send image to be stored here for future requests
  } catch (e) {
    console.error('Error: ', e);
    throw e;
  }
};

export default resizingUtility;
