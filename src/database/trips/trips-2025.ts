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
];
