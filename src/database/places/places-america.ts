import { Place } from '../../types';
import { countries } from '../countries';

export const placesAmerica = {
  amazon: Place.from('Amazon', countries.brazil),
  banff: Place.from('Banff', countries.canada),
  campbellRiver: Place.from('Campbell River', countries.canada),
  iguazu: Place.from('Iguazú Falls', countries.argentina),
  jasper: Place.from('Jasper', countries.canada),
  rio: Place.from('Rio de Janeiro', countries.brazil),
  vancouver: Place.from('Vancouver', countries.canada),
};
