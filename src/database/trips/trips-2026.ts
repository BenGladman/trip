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

  Trip.from(PlainDate.from(2026, 4, 17), PlainDate.from(2026, 4, 20), [
    places.valletta,
    activities.birthday,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2026, 5, 23), PlainDate.from(2026, 5, 28), [
    places.split,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2026, 8, 16), PlainDate.from(2026, 8, 22), [
    places.palma,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2026, 10, 30), PlainDate.from(2026, 11, 2), [
    places.lakes,
    activities.anniversary,
  ]),
];
