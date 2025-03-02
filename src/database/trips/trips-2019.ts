import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2019 = [
  Trip.from(PlainDate.from(2019, 4, 19), PlainDate.from(2019, 4, 22), [
    accommodations.starAndGarterFalmouth,
    activities.birthday,
    activities.train,
  ]),

  Trip.from(PlainDate.from(2019, 5, 4), PlainDate.from(2019, 5, 11), [
    places.pontcysyllte,
    places.whitchurch,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipN542bX_AH8Ye-8BGCYdYBnKDaHAtkXKLkfFoyCuRWTJVJn-f1P7XWIOzxaJ92kqA',
    ),
    agents.angloWelsh,
  ]),

  Trip.from(PlainDate.from(2019, 8, 17), PlainDate.from(2019, 8, 19), [
    accommodations.gannetInn,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2019, 9, 14), PlainDate.from(2019, 9, 28), [
    places.antananarivo,
    places.ifaty,
    activities.cycling,
    Link.googlePhotos(
      'AF1QipOVNKSU-xzJ3pLFx3Es8i0l22VQgb6djsTUr7lnI6ar4zBpMBU09lzgfx2L0uCqaQ',
    ),
    agents.exodus,
  ]),
];
