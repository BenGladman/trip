import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2023 = [
  Trip.from(PlainDate.from(2023, 2, 17), PlainDate.from(2023, 2, 24), [
    places.sedgefordHall,
  ]),

  Trip.from(PlainDate.from(2023, 5, 27), PlainDate.from(2023, 6, 3), [
    places.warwickshire,
    activities.canalBoat,
    agents.kateBoats,
  ]),

  Trip.from(PlainDate.from(2023, 7, 7), PlainDate.from(2023, 7, 8), [
    places.manchester,
    activities.birthday,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2023, 8, 18), PlainDate.from(2023, 8, 20), [
    places.henley,
    activities.birthday,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2023, 8, 31), PlainDate.from(2023, 9, 3), [
    places.greatYarmouth,
    activities.wedding,
  ]),

  Trip.from(PlainDate.from(2023, 10, 4), PlainDate.from(2023, 10, 18), [
    places.mykanos,
    places.naxos,
    places.milos,
    places.santorini,
    activities.anniversary,
    agents.audley,
  ]),
];
