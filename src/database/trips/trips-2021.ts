import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2021 = [
  Trip.from(PlainDate.from(2021, 5, 28), PlainDate.from(2021, 6, 4), [
    places.manchester,
    places.todmorden,
    places.hebdenBridge,
    activities.canalBoat,
    agents.shireCruisers,
  ]),

  Trip.from(PlainDate.from(2021, 8, 16), PlainDate.from(2021, 8, 18), [
    places.birch,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2021, 10, 29), PlainDate.from(2021, 10, 31), [
    places.hoxtonHotel,
    activities.wedding,
  ]),
];
