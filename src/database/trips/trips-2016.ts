import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2016 = [
  Trip.from(PlainDate.from(2016, 4, 27), PlainDate.from(2016, 5, 1), [
    places.nice,
    activities.cityBreak,
    Link.googlePhotos(
      'AF1QipOEQ0RrCLOyVsfFUE4Rqq5A9nPLwWRvBURMC9PuncTjcUsOgn3LKguf12LtkHBW2A',
    ),
  ]),

  Trip.from(PlainDate.from(2016, 8, 26), PlainDate.from(2016, 8, 29), [
    accommodations.velvetHotel,
    activities.pride,
    activities.train,
  ]),

  Trip.from(PlainDate.from(2016, 10, 28), PlainDate.from(2016, 10, 30), [
    accommodations.seahamHallHotel,
    activities.anniversary,
    activities.spa,
  ]),

  Trip.from(PlainDate.from(2016, 12, 28), PlainDate.from(2017, 1, 3), [
    accommodations.sedgefordHall,
    activities.nye,
  ]),
];
