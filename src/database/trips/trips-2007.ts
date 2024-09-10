import { PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2007 = [
  Trip.from(PlainDate.from(2007, 3, 19), PlainDate.from(2007, 3, 21), [
    places.stockholm,
    activities.cityBreak,
  ]),

  Trip.from(PlainDate.from(2007, 4, 27), PlainDate.from(2007, 4, 29), [
    places.butlinsMinehead,
    activities.atp,
  ]),

  Trip.from(PlainDate.from(2007, 7, 16), PlainDate.from(2007, 7, 30), [
    places.losAngeles,
    places.santaBarbara,
    places.sanLuisObispo,
    places.monterey,
    places.yosemite,
    places.sanFrancisco,
    activities.drive,
    agents.vacationsGroup,
  ]),

  Trip.from(PlainDate.from(2007, 8, 21), PlainDate.from(2007, 8, 28), [
    places.edinburgh,
    activities.fringe,
  ]),
];
