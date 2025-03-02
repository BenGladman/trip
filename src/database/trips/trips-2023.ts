import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2023 = [
  Trip.from(PlainDate.from(2023, 2, 17), PlainDate.from(2023, 2, 24), [
    accommodations.sedgefordHall,
  ]),

  Trip.from(PlainDate.from(2023, 5, 27), PlainDate.from(2023, 6, 3), [
    places.coventry,
    places.rugby,
    places.warwick,
    activities.canalBoat,
    Link.googlePhotos(
      'AF1QipMzfDc_OcMjWIpoqTmY9N2m7NUO5UaNuu45NzieFfCsHPRas4ZB4C5fLi6fc8EkFQ',
    ),
    agents.kateBoats,
  ]),

  Trip.from(PlainDate.from(2023, 7, 7), PlainDate.from(2023, 7, 8), [
    places.manchester,
    activities.birthday,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2023, 8, 18), PlainDate.from(2023, 8, 20), [
    places.henley,
    activities.birthday,
    activities.concert,
  ]),

  Trip.from(PlainDate.from(2023, 8, 31), PlainDate.from(2023, 9, 3), [
    places.greatYarmouth,
    activities.wedding,
    Link.googlePhotos(
      'AF1QipMyu8F8iR-cuuf-XYH9G4FBrwk4iyutN27Kqk4IEsZSTp0b5tG5QUDKDii07Z6hUw',
    ),
  ]),

  Trip.from(PlainDate.from(2023, 10, 4), PlainDate.from(2023, 10, 18), [
    places.mykanos,
    places.naxos,
    places.milos,
    places.santorini,
    activities.anniversary,
    Link.googlePhotos(
      'AF1QipN0bUXnzLnR6NmTYM_yAjz95MBAZX9spLz5tR_YEXtJM9RtAuWqbU2x7bo6Vs9RZQ',
    ),
    agents.audley,
  ]),
];
