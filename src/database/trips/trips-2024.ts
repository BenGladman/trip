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
    Link.googlePhotos(
      'AF1QipPQtFEAzKs99ntYwbIZ8Xub3biQD0aWp1ECgiHFAmLNbn4F5_EHDkYa88-Ctx5CBw',
    ),
    agents.exodus,
  ]),

  Trip.from(PlainDate.from(2024, 5, 3), PlainDate.from(2024, 5, 6), [
    places.rye,
    activities.birthday,
    Link.googlePhotos(
      'AF1QipMMNLXbr9uo5bvAp-RF0lW4nhVqHqh_ELa-F-6I0ytnREoXBRkcgjRm-5Yri8PJMQ',
    ),
  ]),

  Trip.from(PlainDate.from(2024, 5, 16), PlainDate.from(2024, 5, 23), [
    places.skipton,
    places.foulridge,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipMrmnckwuqtBmAmGn-Hwm0JOu9Lab-9bWkgyrBonYktXVfjTi41QOA2F0915f3Z-Q',
    ),
    agents.silsdenBoats,
  ]),

  Trip.from(PlainDate.from(2024, 8, 9), PlainDate.from(2024, 8, 19), [
    accommodations.fallenAngel,
    accommodations.chelseaHouseFalmouth,
    activities.birthday,
    activities.drive,
    Link.googlePhotos(
      'AF1QipOHvdxJ_mIBMVWXl6Kht9F7yD4PG-J5j3y8agBIhd-zGPUrLkVgi4OETrZHVVZbfg',
    ),
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
    Link.googlePhotos(
      'AF1QipPcxi6IDZdPiEd1iEvx3e4EccSCq7ycPj1hqbODB1c3I3Q8ABLZmmlJVFIOQqvPsQ',
    ),
  ]),
];
