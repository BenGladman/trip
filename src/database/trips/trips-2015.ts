import { Link, PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2015 = [
  Trip.from(PlainDate.from(2015, 3, 28), PlainDate.from(2015, 4, 4), [
    places.barmouth,
    Link.googlePhotos('AF1QipPHP47OxE0wvzaKK_fxrRKIXcydg0m65S-gPqM'),
  ]),

  Trip.from(PlainDate.from(2015, 7, 27), PlainDate.from(2015, 8, 3), [
    places.bath,
    places.stMawes,
    places.newquay,
    activities.wedding,
    activities.drive,
    activities.spa,
  ]),

  Trip.from(PlainDate.from(2015, 12, 3), PlainDate.from(2015, 12, 7), [
    places.amsterdam,
    activities.cityBreak,
  ]),
];
