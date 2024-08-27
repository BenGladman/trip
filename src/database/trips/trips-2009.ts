import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2009 = [
  Trip.from(PlainDate.from(2009, 4, 3), PlainDate.from(2009, 4, 6), [
    places.cinqueTerre,
  ]),

  Trip.from(PlainDate.from(2009, 5, 8), PlainDate.from(2009, 5, 10), [
    places.butlinsMinehead,
    activities.atp,
  ]),

  Trip.from(PlainDate.from(2009, 7, 3), PlainDate.from(2009, 7, 6), [
    places.bournemouth,
    places.christchurch,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2009, 8, 24), PlainDate.from(2009, 8, 30), [
    places.edinburgh,
    activities.fringe,
  ]),

  Trip.from(PlainDate.from(2009, 10, 29), PlainDate.from(2009, 11, 1), [
    places.scarletHotel,
    activities.anniversary,
  ]),
];
