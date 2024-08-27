import { Activity } from './Activity';
import { Agent } from './Agent';
import { Country } from './Country';
import { Place } from './Place';
import type { PlainDate } from './PlainDate';

export class Trip {
  public readonly start: PlainDate;
  public readonly finish: PlainDate;
  public readonly duration: number;
  public readonly countries: Country[];
  public readonly places: Place[];
  public readonly activities: Activity[];
  public readonly agent: Agent | null;

  private constructor(
    start: PlainDate,
    finish: PlainDate,
    duration: number,
    countries: Country[],
    places: Place[],
    activities: Activity[],
    agent: Agent | null,
  ) {
    this.start = start;
    this.finish = finish;
    this.duration = duration;
    this.countries = countries;
    this.places = places;
    this.activities = activities;
    this.agent = agent;
  }

  public static from(
    start: PlainDate,
    finish: PlainDate,
    data: Array<Place | Activity | Agent>,
  ) {
    const countrySet = new Set<Country>();
    const placeSet = new Set<Place>();
    const activitySet = new Set<Activity>();
    let agent: Agent | null = null;

    for (const item of data) {
      if (item instanceof Place) {
        countrySet.add(item.country);
        for (const parent of item.allParents) {
          placeSet.add(parent);
        }
        placeSet.add(item);
      } else if (item instanceof Activity) {
        activitySet.add(item);
      } else if (item instanceof Agent) {
        agent = item;
      }
    }

    const duration = Math.max(0, start.daysUntil(finish) + 1);

    return new Trip(
      start,
      finish,
      duration,
      [...countrySet],
      [...placeSet],
      [...activitySet],
      agent,
    );
  }
}
