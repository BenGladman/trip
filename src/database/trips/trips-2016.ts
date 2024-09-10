import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2016 = [
  Trip.from(PlainDate.from(2016, 4, 27), PlainDate.from(2016, 5, 1), [
    places.nice,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2016, 8, 26), PlainDate.from(2016, 8, 29), [
    places.velvetHotel,
    activities.pride,
  ]),

  Trip.from(PlainDate.from(2016, 10, 28), PlainDate.from(2016, 10, 30), [
    places.seahamHallHotel,
    activities.anniversary,
  ]),

  Trip.from(PlainDate.from(2016, 12, 28), PlainDate.from(2017, 1, 3), [
    places.sedgefordHall,
    activities.nye,
  ]),
];
