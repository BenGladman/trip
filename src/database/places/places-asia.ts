import { Place } from '../../types';
import { countries } from '../countries';

export const placesAsia = {
  ayutthaya: Place.from('Ayutthaya', countries.thailand, [14.4, 100.6]),
  bangkok: Place.from('Bangkok', countries.thailand, [13.8, 100.5]),
  kohSamui: Place.from('Koh Samui', countries.thailand, [9.5, 100]),
  mekongDelta: Place.from('Mekong Delta', countries.vietnam, [10.1, 105.6]),
  phnomPenh: Place.from('Phnom Penh', countries.cambodia, [11.6, 104.9]),
  saigon: Place.from('Saigon', countries.vietnam, [10.8, 106.7]),
  siemReap: Place.from('Siem Reap', countries.cambodia, [13.4, 103.9]),
  singapore: Place.from('Singapore', countries.singapore, [1.4, 103.8]),
};
