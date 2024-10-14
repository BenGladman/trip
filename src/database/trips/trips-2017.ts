import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2017 = [
  Trip.from(PlainDate.from(2017, 4, 26), PlainDate.from(2017, 4, 30), [
    places.dubrovnik,
    activities.cityBreak,
    Link.googlePhotos('AF1QipPLGzV8c65htlCmc4DU2RLdPp-5iYrXCRCHtxo'),
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
    Link.googlePhotos('AF1QipPviqg0SHKmyT9_vOboLvr4hN3w8zI3jZjvF9g'),
  ]),

  Trip.from(PlainDate.from(2017, 8, 25), PlainDate.from(2017, 8, 28), [
    accommodations.countyHotelHexham,
    activities.wedding,
    activities.train,
    Link.googlePhotos('AF1QipMDWrMJdSOAS2jTgsdikPvfes74xW0JFKMsf1Y'),
  ]),

  Trip.from(PlainDate.from(2017, 11, 10), PlainDate.from(2017, 11, 12), [
    accommodations.hotel25HoursZurich,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2017, 12, 7), PlainDate.from(2017, 12, 10), [
    accommodations.arloNomad,
    activities.cityBreak,
    Link.googlePhotos('AF1QipPYIYt_OAGvoF2MLt4M-zNeb9Dt80PJ0AFztvA'),
  ]),

  Trip.from(PlainDate.from(2017, 12, 28), PlainDate.from(2018, 1, 2), [
    places.saintJean,
    activities.nye,
    Link.googlePhotos('AF1QipP3WcvqMt1_vUttx3MdYQYra9PcImdxkLye29k'),
  ]),
];
