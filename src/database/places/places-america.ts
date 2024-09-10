import { Place } from '../../types';
import { countries } from '../countries';

export const placesAmerica = {
  manaus: Place.from('Manaus', countries.brazil, [-3.1, -60]),
  banff: Place.from('Banff', countries.canada, [51.1, -115.6]),
  campbellRiver: Place.from('Campbell River', countries.canada, [50, -125.3]),
  iguazu: Place.from('Iguazú Falls', countries.argentina, [-25.7, -54.4]),
  jasper: Place.from('Jasper', countries.canada, [52.9, -118]),
  rio: Place.from('Rio de Janeiro', countries.brazil, [-22.9, -43.2]),
  vancouver: Place.from('Vancouver', countries.canada, [49.3, -123.1]),
};
