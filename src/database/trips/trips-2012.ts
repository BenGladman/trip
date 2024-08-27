import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2012 = [
  Trip.from(PlainDate.from(2012, 3, 9), PlainDate.from(2012, 3, 11), [
    places.butlinsMinehead,
    activities.atp,
  ]),

  Trip.from(PlainDate.from(2012, 11, 3), PlainDate.from(2012, 11, 16), [
    places.rio,
    places.iguazu,
    places.amazon,
    agents.audley,
  ]),
];
