import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2022 = [
  Trip.from(PlainDate.from(2022, 4, 15), PlainDate.from(2022, 4, 19), [
    accommodations.thymeHotel,
    activities.birthday,
    Link.googlePhotos(
      'AF1QipOOMKjy-OkmzlRxFkEvmZsQ7TZGDS1xkEHAvAOKUe5-m6h3YgmyV5xPoew-HElqdw',
    ),
  ]),

  Trip.from(PlainDate.from(2022, 4, 30), PlainDate.from(2022, 5, 6), [
    places.sowerbyBridge,
    places.huddersfield,
    places.standedgeTunnel,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipPftKcxFsvbvse3We7_6IBymZN0AFhI0keLUhoFNpBOoNPyXkk8DwWEQQrLgP3paw',
    ),
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
    Link.googlePhotos(
      'AF1QipPP-N_4MZTCLXa0XJNI0RwNbuIPK0TQAIlJZ82ijnoza3wrY51QytyWgkrHPQcKLw',
    ),
    agents.exodus,
  ]),
];
