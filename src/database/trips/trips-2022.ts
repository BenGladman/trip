import { PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2022 = [
  Trip.from(PlainDate.from(2022, 4, 15), PlainDate.from(2022, 4, 19), [
    accommodations.thymeHotel,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2022, 4, 30), PlainDate.from(2022, 5, 6), [
    places.sowerbyBridge,
    places.huddersfield,
    places.standedgeTunnel,
    activities.canalBoat,
    agents.shireCruisers,
  ]),

  Trip.from(PlainDate.from(2022, 8, 16), PlainDate.from(2022, 8, 23), [
    places.saintJean,
    activities.birthday,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2022, 9, 16), PlainDate.from(2022, 9, 25), [
    places.pisa,
    places.tuscany,
    places.florence,
    activities.cycling,
    agents.exodus,
  ]),
];
