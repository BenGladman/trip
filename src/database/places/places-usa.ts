import { Place } from '../../types';
import { countries } from '../countries';

const regions = {
  california: Place.from('California', countries.usa),
  newEngland: Place.from('New England', countries.usa),
};

const municipalities = {
  boston: Place.from('Boston', regions.newEngland, [42.4, -71]),
  jacksonNH: Place.from('Jackson NH', regions.newEngland, [44.1, -71.2]),
  kennebunkportME: Place.from(
    'Kennebunkport ME',
    regions.newEngland,
    [43.4, -70.5],
  ),
  marthasVineyard: Place.from(
    'Martha’s Vineyard',
    regions.newEngland,
    [41.3, -70.6],
  ),
  lenoxMA: Place.from('Lenox MA', regions.newEngland, [42.4, -73.3]),
  losAngeles: Place.from('Los Angeles', regions.california, [34, -118.2]),
  monterey: Place.from('Monterey', regions.california),
  newportRI: Place.from('New Port RI', regions.newEngland, [41.5, -71.3]),
  newYork: Place.from('New York', countries.usa, [40.7, -74]),
  provinceTownMA: Place.from('Provincetown MA', regions.newEngland),
  sanFrancisco: Place.from('San Francisco', regions.california, [37.8, -122.4]),
  sanLuisObispo: Place.from('San Luis Obispo', regions.california),
  santaBarbara: Place.from('Santa Barbara', regions.california),
  woodstockVT: Place.from('Woodstock VT', regions.newEngland, [43.6, -72.5]),
  yosemite: Place.from('Yosemite', regions.california, [37.8, -119.5]),
};

export const placesUsa = {
  ...regions,
  ...municipalities,
};
