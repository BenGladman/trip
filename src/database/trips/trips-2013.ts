import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2013 = [
  Trip.from(PlainDate.from(2013, 9, 1), PlainDate.from(2013, 9, 14), [
    places.singapore,
    places.kohSamui,
  ]),

  Trip.from(PlainDate.from(2013, 11, 16), PlainDate.from(2013, 11, 22), [
    places.berlin,
    activities.concert,
    activities.cityBreak,
  ]),
];
