import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2019 = [
  Trip.from(PlainDate.from(2019, 4, 19), PlainDate.from(2019, 4, 22), [
    places.starAndGarterFalmouth,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2019, 5, 4), PlainDate.from(2019, 5, 11), [
    places.pontcysyllte,
    places.whitchurch,
    activities.canalBoat,
    agents.angloWelsh,
  ]),

  Trip.from(PlainDate.from(2019, 8, 17), PlainDate.from(2019, 8, 19), [
    places.gannetInn,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2019, 9, 14), PlainDate.from(2019, 9, 28), [
    places.antananarivo,
    places.ifaty,
    activities.cycling,
    agents.exodus,
  ]),
];
