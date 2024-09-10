import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2014 = [
  Trip.from(PlainDate.from(2014, 4, 17), PlainDate.from(2014, 4, 20), [
    places.windermere,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2014, 8, 17), PlainDate.from(2014, 8, 19), [
    places.woolacombe,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2014, 9, 13), PlainDate.from(2014, 9, 28), [
    places.banff,
    places.jasper,
    places.vancouver,
    places.campbellRiver,
    activities.drive,
    agents.audley,
  ]),

  Trip.from(PlainDate.from(2014, 10, 30), PlainDate.from(2014, 11, 2), [
    places.brighton,
    activities.anniversary,
  ]),
];
