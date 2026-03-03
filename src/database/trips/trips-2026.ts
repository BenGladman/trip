import { Link, PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2026 = [
  Trip.from(PlainDate.from(2026, 2, 14), PlainDate.from(2026, 2, 28), [
    places.sigiriya,
    places.kandy,
    places.nuwaraEliya,
    places.ella,
    places.galle,
    activities.cycling,
    Link.googlePhotos(
      'AF1QipPa8AQjDdZgCrIEGaNOupXRq3nfbB1n3Il86jb2I6SQ3YLvPd6KYFGTaIQfmHmwUA',
    ),
    agents.exodus,
  ]),
];
