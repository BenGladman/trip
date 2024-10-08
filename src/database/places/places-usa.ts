import { Place } from '../../types';
import { countries } from '../countries';

const regions = {
  california: Place.from('California', countries.usa),
  newEngland: Place.from('New England', countries.usa),
};

const municipalities = {
  boston: Place.from('Boston', regions.newEngland, [42.4, -71]),
  marthasVineyard: Place.from(
    'Martha’s Vineyard',
    regions.newEngland,
    [41.3, -70.6],
  ),
  losAngeles: Place.from('Los Angeles', regions.california, [34, -118.2]),
  monterey: Place.from('Monterey', regions.california),
  newYork: Place.from('New York', countries.usa, [40.7, -74]),
  provinceTown: Place.from('Provincetown', regions.newEngland),
  sanFrancisco: Place.from('San Francisco', regions.california, [37.8, -122.4]),
  sanLuisObispo: Place.from('San Luis Obispo', regions.california),
  santaBarbara: Place.from('Santa Barbara', regions.california),
  yosemite: Place.from('Yosemite', regions.california, [37.8, -119.5]),
};

export const placesUsa = {
  ...regions,
  ...municipalities,
};
