import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2018 = [
  Trip.from(PlainDate.from(2018, 4, 19), PlainDate.from(2018, 4, 20), [
    accommodations.curtainHotel,
    activities.birthday,
  ]),

  Trip.from(PlainDate.from(2018, 5, 12), PlainDate.from(2018, 5, 19), [
    places.stratfordUponAvon,
    places.warwick,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipMoeYXizM6SXMjFEEwOMwaAtK-hBvloyOMuSN8mdtyxoJrZR_7PGsQO9kg85JbcPQ',
    ),
    agents.stratfordCourtCruisers,
  ]),

  Trip.from(PlainDate.from(2018, 5, 26), PlainDate.from(2018, 5, 28), [
    places.bristol,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2018, 8, 17), PlainDate.from(2018, 8, 26), [
    accommodations.humbleBee,
    accommodations.hotelDuVinPoole,
    accommodations.royalYachtJersey,
    accommodations.yellohCoteSauvage,
    accommodations.greeDesLandes,
    activities.birthday,
    activities.drive,
    Link.googlePhotos(
      'AF1QipMFPKyBGnmacdsDqVjog6-AiHLDkBF9ouGWLZ5NuoXDVhMrrD0lDo14UM8JDRb6vw',
    ),
  ]),

  Trip.from(PlainDate.from(2018, 12, 28), PlainDate.from(2019, 1, 4), [
    accommodations.sedgefordHall,
    activities.nye,
    Link.googlePhotos(
      'AF1QipPtTdd0TptjONTnNEVIfrGSd_OVbO22IHxQn80AANBt8PuCdw7Sk9V_Zqu0MUYlGQ',
    ),
  ]),
];
