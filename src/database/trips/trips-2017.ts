import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2017 = [
  Trip.from(PlainDate.from(2017, 4, 26), PlainDate.from(2017, 4, 30), [
    places.dubrovnik,
    activities.cityBreak,
    Link.googlePhotos(
      'AF1QipN_zY6BTTUrk6ohAPUUup7dbxtQ4xn3Vqchh8db-Hum81vneAugHsRtapwcMmd3bQ',
    ),
  ]),

  Trip.from(PlainDate.from(2017, 5, 5), PlainDate.from(2017, 5, 7), [
    places.sowerbyBridge,
    places.hebdenBridge,
    activities.canalBoat,
    agents.shireCruisers,
  ]),

  Trip.from(PlainDate.from(2017, 7, 7), PlainDate.from(2017, 7, 9), [
    places.amsterdam,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2017, 8, 17), PlainDate.from(2017, 8, 20), [
    accommodations.artistResidencePenzance,
    activities.birthday,
    activities.train,
    Link.googlePhotos(
      'AF1QipMy3aJ8TJtk3aIhNKFRfZz5FlTLihwVv0xv-5fbqpEZNNb7j_1AYu1QV5gO-F0bpw',
    ),
  ]),

  Trip.from(PlainDate.from(2017, 8, 25), PlainDate.from(2017, 8, 28), [
    accommodations.countyHotelHexham,
    activities.wedding,
    activities.train,
    Link.googlePhotos(
      'AF1QipO0UwPgvtLnh5RfI3hZfz14XvK0aHzCvt8LPure0VLZBBYpMGeVcVXXfGGSjdXk7w',
    ),
  ]),

  Trip.from(PlainDate.from(2017, 11, 10), PlainDate.from(2017, 11, 12), [
    accommodations.hotel25HoursZurich,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2017, 12, 7), PlainDate.from(2017, 12, 10), [
    accommodations.arloNomad,
    activities.cityBreak,
    Link.googlePhotos(
      'AF1QipMF243Rhn-D-fjE9hxHZj2voax_UxC2Gx_kewYH8wWf66pTjRTleeSzx6MC9MO5Nw',
    ),
  ]),

  Trip.from(PlainDate.from(2017, 12, 28), PlainDate.from(2018, 1, 2), [
    places.saintJean,
    activities.nye,
    Link.googlePhotos(
      'AF1QipP-OPCK1qfzivOERLX6LYeMKAWjdPpAiLBiR-jH36Ugf3uAmEI83bddXNekMa5ghg',
    ),
  ]),
];
