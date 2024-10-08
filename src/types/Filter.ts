import type { Accommodation } from './Accommodation';
import type { Activity } from './Activity';
import type { Agent } from './Agent';
import type { Country } from './Country';
import type { Place } from './Place';
import type { Trip } from './Trip';

export type Filter =
  | Trip
  | Country
  | Place
  | Accommodation
  | Agent
  | Activity
  | null;
