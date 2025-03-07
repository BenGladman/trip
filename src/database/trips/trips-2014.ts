import { Link, PlainDate, Trip } from '../../types';
import { activities } from '../activities';
import { agents } from '../agents';
import { places } from '../places/places';

export const trips2014 = [
  Trip.from(PlainDate.from(2014, 4, 18), PlainDate.from(2014, 4, 21), [
    places.windermere,
    activities.birthday,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2014, 8, 16), PlainDate.from(2014, 8, 19), [
    places.woolacombe,
    activities.birthday,
    activities.drive,
  ]),

  Trip.from(PlainDate.from(2014, 9, 13), PlainDate.from(2014, 9, 28), [
    places.banff,
    places.jasper,
    places.vancouver,
    places.campbellRiver,
    activities.drive,
    activities.train,
    Link.googlePhotos(
      'AF1QipNK311ofuc_r-Xwz_gS2mOol29X-nmqVjaVtVHXnwymlAR-HidPlqNBlKBMAXkghw',
    ),
    agents.audley,
  ]),

  Trip.from(PlainDate.from(2014, 10, 30), PlainDate.from(2014, 11, 2), [
    places.brighton,
    activities.anniversary,
  ]),
];
