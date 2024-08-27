import { placesAfrica } from './places-africa';
import { placesAmerica } from './places-america';
import { placesAsia } from './places-asia';
import { placesEurope } from './places-europe';
import { placesUk } from './places-uk';
import { placesUsa } from './places-usa';

export const places = {
  ...placesUk,
  ...placesEurope,
  ...placesUsa,
  ...placesAmerica,
  ...placesAsia,
  ...placesAfrica,
};
