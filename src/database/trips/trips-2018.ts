import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2018 = [
  Trip.from(PlainDate.from(2018, 4, 19), PlainDate.from(2018, 4, 20), [
    places.curtainHotel,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2018, 5, 12), PlainDate.from(2018, 5, 19), [
    places.stratfordUponAvon,
    places.warwick,
    activities.canalBoat,
    agents.stratfordCourtCruisers,
  ]),

  Trip.from(PlainDate.from(2018, 5, 26), PlainDate.from(2018, 5, 28), [
    places.bristol,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2018, 8, 17), PlainDate.from(2018, 8, 26), [
    places.humbleBee,
    places.hotelDuVinPoole,
    places.royalYachtJersey,
    places.yellohCoteSauvage,
    places.greeDesLandes,
    activities.birthday,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2018, 12, 28), PlainDate.from(2019, 1, 4), [
    places.sedgefordHall,
    activities.nye,
  ]),
];
