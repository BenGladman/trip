import { Link, PlainDate, Trip } from '../../types';
import { accommodations } from '../accommodations';
import { activities } from '../activities';
import { places } from '../places/places';

export const trips2013 = [
  Trip.from(PlainDate.from(2013, 8, 2), PlainDate.from(2013, 8, 3), [
    accommodations.pigBrockenhurst,
  ]),

  Trip.from(PlainDate.from(2013, 9, 1), PlainDate.from(2013, 9, 14), [
    places.singapore,
    places.kohSamui,
    activities.spa,
    Link.googlePhotos(
      'AF1QipOHfiySJBSvmFjaNZMgPiu3_LZXqyFbHTuAdBW1eFdhTkx-Sr0O1eyCbjgIrOxujQ',
    ),
  ]),

  Trip.from(PlainDate.from(2013, 11, 16), PlainDate.from(2013, 11, 22), [
    places.berlin,
    activities.concert,
    activities.cityBreak,
    Link.googlePhotos(
      'AF1QipN9bSC40UcCdds45G0XIO7Xb_vpLeLHSxCl28NnSAhCyaPtjVPQcPVWJjUnLgBx3w',
    ),
  ]),

  Trip.from(PlainDate.from(2013, 12, 28), PlainDate.from(2014, 1, 4), [
    places.ashbyDeLaZouch,
    activities.nye,
  ]),
];
