import { Accommodation } from './Accommodation';
import { Activity } from './Activity';
import { Agent } from './Agent';
import type { Coordinates } from './Coordinates';
import { Country } from './Country';
import type { Filter } from './Filter';
import { Place } from './Place';
import type { PlainDate } from './PlainDate';

export class Trip {
  public readonly start: PlainDate;
  public readonly finish: PlainDate;
  public readonly duration: number;
  public readonly countries: readonly Country[];
  public readonly places: readonly Place[];
  public readonly accommodations: readonly Accommodation[];
  public readonly activities: readonly Activity[];
  public readonly agent: Agent | null;
  public readonly coordinates: readonly Coordinates[];

  private constructor(
    start: PlainDate,
    finish: PlainDate,
    duration: number,
    countries: Iterable<Country>,
    places: Iterable<Place>,
    accommodations: Iterable<Accommodation>,
    activities: Iterable<Activity>,
    agent: Agent | null,
    coordinates: Iterable<Coordinates>,
  ) {
    this.start = start;
    this.finish = finish;
    this.duration = duration;
    this.countries = Array.from(countries);
    this.places = Array.from(places);
    this.accommodations = Array.from(accommodations);
    this.activities = Array.from(activities);
    this.agent = agent;
    this.coordinates = Array.from(coordinates);
  }

  public get durationDescription() {
    if (this.duration === 1) {
      return '1 day';
    }
    if (this.duration > 1) {
      return `${this.duration} days`;
    }
    return '';
  }

  public filter(filter: Filter): boolean {
    if (filter instanceof Trip) {
      return this === filter;
    }
    if (filter instanceof Country) {
      return this.countries.includes(filter);
    }
    if (filter instanceof Place) {
      return this.places.includes(filter);
    }
    if (filter instanceof Accommodation) {
      return this.accommodations.includes(filter);
    }
    if (filter instanceof Activity) {
      return this.activities.includes(filter);
    }
    if (filter instanceof Agent) {
      return this.agent === filter;
    }
    return true;
  }

  public get buttonLabel() {
    return this.start.string;
  }

  public static from(
    start: PlainDate,
    finish: PlainDate,
    data: Array<Place | Accommodation | Activity | Agent>,
  ) {
    const countrySet = new Set<Country>();
    const placeSet = new Set<Place>();
    const accommodationSet = new Set<Accommodation>();
    const activitySet = new Set<Activity>();
    let agent: Agent | null = null;

    const addPlace = (place: Place) => {
      countrySet.add(place.country);
      for (const parent of place.allParents) {
        placeSet.add(parent);
      }
      placeSet.add(place);
    };

    for (const item of data) {
      if (item instanceof Place) {
        addPlace(item);
      } else if (item instanceof Accommodation) {
        accommodationSet.add(item);
        addPlace(item.place);
      } else if (item instanceof Activity) {
        activitySet.add(item);
      } else if (item instanceof Agent) {
        agent = item;
      }
    }

    const duration = Math.max(0, start.daysUntil(finish) + 1);

    const coordinates: Coordinates[] = [];

    for (const place of placeSet) {
      if (place.coordinates) {
        coordinates.push(place.coordinates);
      }
    }

    return new Trip(
      start,
      finish,
      duration,
      countrySet,
      placeSet,
      accommodationSet,
      activitySet,
      agent,
      coordinates,
    );
  }
}
