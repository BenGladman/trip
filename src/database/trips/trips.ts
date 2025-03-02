import { trips2007 } from './trips-2007';
import { trips2008 } from './trips-2008';
import { trips2009 } from './trips-2009';
import { trips2010 } from './trips-2010';
import { trips2011 } from './trips-2011';
import { trips2012 } from './trips-2012';
import { trips2013 } from './trips-2013';
import { trips2014 } from './trips-2014';
import { trips2015 } from './trips-2015';
import { trips2016 } from './trips-2016';
import { trips2017 } from './trips-2017';
import { trips2018 } from './trips-2018';
import { trips2019 } from './trips-2019';
import { trips2020 } from './trips-2020';
import { trips2021 } from './trips-2021';
import { trips2022 } from './trips-2022';
import { trips2023 } from './trips-2023';
import { trips2024 } from './trips-2024';
import { trips2025 } from './trips-2025';

export const trips = [
  ...trips2007,
  ...trips2008,
  ...trips2009,
  ...trips2010,
  ...trips2011,
  ...trips2012,
  ...trips2013,
  ...trips2014,
  ...trips2015,
  ...trips2016,
  ...trips2017,
  ...trips2018,
  ...trips2019,
  ...trips2020,
  ...trips2021,
  ...trips2022,
  ...trips2023,
  ...trips2024,
  ...trips2025,
];

trips.sort((a, b) => b.start.date.valueOf() - a.start.date.valueOf());
