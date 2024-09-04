import type { Activity } from './Activity';
import type { Agent } from './Agent';
import type { Country } from './Country';
import type { Place } from './Place';

export type Filter = Country | Place | Agent | Activity | null;
