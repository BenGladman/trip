import { PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2009 = [
  Trip.from(PlainDate.from(2009, 4, 3), PlainDate.from(2009, 4, 6), [
    places.cinqueTerre,
  ]),

  Trip.from(PlainDate.from(2009, 5, 8), PlainDate.from(2009, 5, 10), [
    accommodations.butlinsMinehead,
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

  Trip.from(PlainDate.from(2009, 9, 11), PlainDate.from(2009, 9, 15), [
    places.cavan,
    activities.wedding,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2009, 10, 27), PlainDate.from(2009, 11, 1), [
    accommodations.scarletHotel,
    activities.anniversary,
    activities.drive,
    activities.spa,
  ]),
];
