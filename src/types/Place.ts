import type { Coordinates } from './Coordinates';
import { Country } from './Country';

export class Place {
  public readonly name: string;
  public readonly country: Country;
  public readonly parent: Place | null;
  public readonly coordinates: Coordinates | null;

  private constructor(
    name: string,
    country: Country,
    parent: Place | null,
    coordinates: Coordinates | null,
  ) {
    this.name = name;
    this.country = country;
    this.parent = parent;
    this.coordinates = coordinates;
  }

  public static from(
    name: string,
    countryOrParent: Country | Place,
    coordinates: Coordinates | null = null,
  ) {
    if (countryOrParent instanceof Country) {
      return new Place(name, countryOrParent, null, coordinates);
    } else {
      return new Place(
        name,
        countryOrParent.country,
        countryOrParent,
        coordinates,
      );
    }
  }

  public get allParents(): Place[] {
    if (this.parent) {
      return [...this.parent.allParents, this.parent];
    }

    return [];
  }
}
