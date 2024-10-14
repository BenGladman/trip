import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2024 = [
  Trip.from(PlainDate.from(2024, 4, 13), PlainDate.from(2024, 4, 20), [
    places.cilento,
    places.amalfi,
    activities.birthday,
    activities.cycling,
    Link.googlePhotos('AF1QipMZ9Lz42_v5264thgjk8hclmb94Wcs1fy9Npio'),
    agents.exodus,
  ]),

  Trip.from(PlainDate.from(2024, 5, 3), PlainDate.from(2024, 5, 6), [
    places.rye,
    activities.birthday,
    Link.googlePhotos('AF1QipMOjO7Z5HaS1TrNht99Islic7OlMdGs5mZ32e0'),
  ]),

  Trip.from(PlainDate.from(2024, 5, 16), PlainDate.from(2024, 5, 23), [
    places.skipton,
    places.foulridge,
    activities.canalBoat,
    Link.googlePhotos('AF1QipPqzzZxriOJ6igcEzKP1uy_Pb10RUSLEQ3lbZI'),
    agents.silsdenBoats,
  ]),

  Trip.from(PlainDate.from(2024, 8, 9), PlainDate.from(2024, 8, 19), [
    accommodations.fallenAngel,
    accommodations.chelseaHouseFalmouth,
    activities.birthday,
    activities.drive,
    Link.googlePhotos('AF1QipPK9x65QeQaF1odxu533aHDvB0QhqUB1Px6wOA'),
  ]),

  Trip.from(PlainDate.from(2024, 9, 28), PlainDate.from(2024, 10, 11), [
    places.boston,
    places.provinceTownMA,
    places.marthasVineyard,
    places.newportRI,
    places.lenoxMA,
    places.woodstockVT,
    places.jacksonNH,
    places.kennebunkportME,
    activities.drive,
    Link.googlePhotos(
      'AF1QipMikNRZej8DSqm_xunzUEVAFbIvJGZcGfkKJHWpF0hd9mr4o39yrc4QxmQTwOAclA',
    ),
    agents.audley,
  ]),

  Trip.from(PlainDate.from(2024, 11, 15), PlainDate.from(2024, 11, 18), [
    places.amsterdam,
    activities.concert,
    activities.cityBreak,
  ]),
];
