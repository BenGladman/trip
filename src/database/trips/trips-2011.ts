import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2011 = [
  Trip.from(PlainDate.from(2011, 5, 5), PlainDate.from(2011, 5, 9), [
    places.barcelona,
    places.sitges,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2011, 7, 6), PlainDate.from(2011, 7, 10), [
    places.ibiza,
  ]),

  Trip.from(PlainDate.from(2011, 12, 28), PlainDate.from(2012, 1, 4), [
    places.ely,
    activities.nye,
  ]),
];
