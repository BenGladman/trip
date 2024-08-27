import { Place } from '../../types';
import { countries } from '../countries';

const regions = {
  california: Place.from('California', countries.usa),
  newEngland: Place.from('New England', countries.usa),
};

const municipalities = {
  boston: Place.from('Boston', regions.newEngland),
  marthasVineyard: Place.from('Martha’s Vineyard', regions.newEngland),
  losAngeles: Place.from('Los Angeles', regions.california),
  monterey: Place.from('Monterey', regions.california),
  newYork: Place.from('New York', countries.usa),
  provinceTown: Place.from('Provincetown', regions.newEngland),
  sanFrancisco: Place.from('San Francisco', regions.california),
  sanLuisObispo: Place.from('San Luis Obispo', regions.california),
  yosemite: Place.from('Yosemite', regions.california),
};

const accomodations = {
  arloNomad: Place.from('Arlo Nomad', municipalities.newYork),
};

export const placesUsa = {
  ...regions,
  ...municipalities,
  ...accomodations,
};
