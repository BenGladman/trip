import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2013 = [
  Trip.from(PlainDate.from(2013, 8, 2), PlainDate.from(2013, 8, 3), [
    accommodations.pigBrockenhurst,
  ]),

  Trip.from(PlainDate.from(2013, 9, 1), PlainDate.from(2013, 9, 14), [
    places.singapore,
    places.kohSamui,
    activities.spa,
    Link.googlePhotos('AF1QipNQIB8Wi-SZux-OqB7jw1zkQT3hzFXI4zoTUZw'),
  ]),

  Trip.from(PlainDate.from(2013, 11, 16), PlainDate.from(2013, 11, 22), [
    places.berlin,
    activities.concert,
    activities.cityBreak,
    Link.googlePhotos('AF1QipM3eDH2PbJSYs0vO99fgRpokDYsTww-7ARJ0kU'),
  ]),

  Trip.from(PlainDate.from(2013, 12, 28), PlainDate.from(2014, 1, 4), [
    places.ashbyDeLaZouch,
    activities.nye,
  ]),
];
