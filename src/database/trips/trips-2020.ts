import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2020 = [
  Trip.from(PlainDate.from(2020, 1, 25), PlainDate.from(2020, 1, 31), [
    places.vilaVita,
  ]),

  Trip.from(PlainDate.from(2020, 8, 17), PlainDate.from(2020, 8, 24), [
    places.pigBridgePlace,
    places.folkestone,
    places.ticehurst,
    activities.birthday,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2020, 9, 12), PlainDate.from(2020, 9, 18), [
    places.leightonBuzzard,
    places.berkhamsted,
    places.hemelHempstead,
    activities.canalBoat,
    agents.wyvernShipping,
  ]),

  Trip.from(PlainDate.from(2020, 10, 29), PlainDate.from(2020, 11, 1), [
    places.birch,
    activities.anniversary,
  ]),
];
