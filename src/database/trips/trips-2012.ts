import { PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2012 = [
  Trip.from(PlainDate.from(2012, 3, 9), PlainDate.from(2012, 3, 11), [
    accommodations.butlinsMinehead,
    activities.atp,
  ]),

  Trip.from(PlainDate.from(2012, 11, 3), PlainDate.from(2012, 11, 16), [
    places.rio,
    places.iguazu,
    places.manaus,
    agents.audley,
  ]),
];
