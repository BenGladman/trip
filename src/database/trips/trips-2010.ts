import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2010 = [
  Trip.from(PlainDate.from(2010, 7, 28), PlainDate.from(2010, 8, 3), [
    places.obernai,
    places.strasbourg,
    activities.wedding,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2010, 8, 22), PlainDate.from(2010, 8, 29), [
    places.edinburgh,
    activities.fringe,
  ]),

  Trip.from(PlainDate.from(2010, 11, 29), PlainDate.from(2010, 12, 5), [
    places.scarletHotel,
    places.stIves,
  ]),
];
