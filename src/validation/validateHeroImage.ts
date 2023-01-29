import { Config, ImageType } from "./index";
import { checkImageType } from "./validateImageType";

const validateHeroImage = (config: Config, heroName: string, imageLink: string, color: string, stars: number, heroImagesDirectory: string, costumeVariant = 0) => {
  // Checks imgur image type
  checkImageType(
    config,
    `${heroName} w/ costume variant ${costumeVariant} does not have image type ${ImageType.JPG}`,
    imageLink,
    ImageType.JPG
  );
  // Check local image is present
  // Check local image has right color
  // Check local image has the right stars
  // Load imgur image
  // Check imgur image matches local image
}

export default validateHeroImage;