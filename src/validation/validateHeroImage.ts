import {Config, ImageType} from './index';
import {checkImageType} from './validateImageType';
import ImageMissing from '../error/ImageMissing';
import fs from 'fs';
import util from 'util';
import jimp from 'jimp';
import InvalidImage from '../error/InvalidImage';

const validImageSizes = new Set<number>([200, 201]);

const validateHeroImage = async (
  config: Config,
  heroName: string,
  imageLink: string,
  color: string,
  stars: number,
  heroImagesDirectory: string,
  costumeVariant = 0
): Promise<void> => {
  // Checks imgur image type
  checkImageType(
    config,
    `${heroName} w/ costume variant ${costumeVariant} does not have image type ${ImageType.JPG}`,
    imageLink,
    ImageType.JPG
  );
  // Check local image is present
  let costumeAppend = '';
  if (costumeVariant === 1) {
    costumeAppend = 'costume';
  } else if (costumeVariant === 2) {
    costumeAppend = 'costume2';
  }
  const alphaName = (heroName.match(/[a-zA-Z]+/g) || []).join('').toLowerCase();
  const imageFile = `${heroImagesDirectory}${alphaName}${costumeAppend}.jpg`;
  const readFile = util.promisify(fs.readFile);
  let localImage;
  try {
    const fileBuffer = await readFile(imageFile);
    localImage = await jimp.read(fileBuffer);
  } catch (error) {
    throw new ImageMissing(heroName, imageFile);
  }
  if (localImage.getHeight() !== localImage.getWidth()) {
    throw new InvalidImage(
      heroName,
      'Local image must be square, but height and width do not match'
    );
  }
  if (!validImageSizes.has(localImage.getHeight())) {
    throw new InvalidImage(
      heroName,
      `Image file must be 200x200 or 201x201, instead got ${localImage.getHeight()}x${localImage.getHeight()}`
    );
  }
  // TODO: Check local image has right color
  // TODO: Check local image has the right stars
  // TODO: Load imgur image
  // TODO: Check imgur image matches local image
};

export default validateHeroImage;
