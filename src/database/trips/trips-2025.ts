import { Link, PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2025 = [
  Trip.from(PlainDate.from(2025, 2, 8), PlainDate.from(2025, 2, 23), [
    places.bangkok,
    places.ayutthaya,
    places.siemReap,
    places.phnomPenh,
    places.mekongDelta,
    places.saigon,
    activities.cycling,
    Link.googlePhotos(
      'AF1QipMZpsUofR2G0O1iCXWRNkwCxXWzA8LhbvhiJQpNNDmV0562Zj0lAwAQ8MLC9TJ3ng',
    ),
    agents.exodus,
  ]),

  Trip.from(PlainDate.from(2025, 4, 18), PlainDate.from(2025, 4, 21), [
    places.palma,
    activities.birthday,
    Link.googlePhotos(
      'AF1QipM1MNzOyp4p1Df9OmJMD0Yfte70D62GoHmSpqWnMuHFCusykP-VYu6sLDd0MjaRZA',
    ),
  ]),

  Trip.from(PlainDate.from(2025, 5, 29), PlainDate.from(2025, 6, 6), [
    places.saltaire,
    places.leeds,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipP1I3GidLDXQpVTFL3iW-vBzMmPebNEhqV4KESDcPE-qkhFZlQyskMgTA7s9_4e0Q',
    ),
    agents.silsdenBoats,
  ]),

  Trip.from(PlainDate.from(2025, 7, 18), PlainDate.from(2025, 7, 21), [
    places.greatYarmouth,
    Link.googlePhotos(
      'AF1QipNq27slWDK2nSgxXKO39U2wFVojzPGzl9asnlEhKHOfr7VUutlvue1a_KM7wa9Dyw',
    ),
  ]),

  Trip.from(PlainDate.from(2025, 9, 5), PlainDate.from(2025, 9, 14), [
    places.porto,
    places.pontevedra,
    places.santiagoDeCompostela,
    activities.cycling,
    Link.googlePhotos(
      'AF1QipPB27-pCicsQ_qPEh6-lPnNHOgDcPy9eSuAL7-S2ym3ntgtLZK8rGAaVUJSP6GtLg',
    ),
  ]),
];
