import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2021 = [
  Trip.from(PlainDate.from(2021, 5, 28), PlainDate.from(2021, 6, 4), [
    places.manchester,
    places.todmorden,
    places.hebdenBridge,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipNEy99JYzVzIyDkiLTjttuFWMkNb98MR5cxhceDlASMzrR74s6ZJI0522HPBpCQzw',
    ),
    agents.shireCruisers,
  ]),

  Trip.from(PlainDate.from(2021, 8, 16), PlainDate.from(2021, 8, 18), [
    accommodations.birch,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2021, 10, 29), PlainDate.from(2021, 10, 31), [
    accommodations.hoxtonHotel,
    activities.wedding,
  ]),
];
