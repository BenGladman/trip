import { PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2008 = [
  Trip.from(PlainDate.from(2008, 3, 17), PlainDate.from(2008, 3, 20), [
    places.paris,
    activities.cityBreak,
    activities.train,
  ]),

  Trip.from(PlainDate.from(2008, 5, 16), PlainDate.from(2008, 5, 18), [
    accommodations.butlinsMinehead,
    activities.atp,
  ]),

  Trip.from(PlainDate.from(2008, 7, 13), PlainDate.from(2008, 7, 26), [
    places.dunmoreEast,
    places.carrigadrohid,
    places.dingle,
    places.tralee,
    places.galway,
    places.sligo,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2008, 8, 18), PlainDate.from(2008, 8, 24), [
    places.edinburgh,
    activities.fringe,
  ]),
];
