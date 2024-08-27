import { Country } from './Country';

export class Place {
  public readonly name: string;
  public readonly country: Country;
  public readonly parent: Place | null;

  private constructor(name: string, country: Country, parent: Place | null) {
    this.name = name;
    this.country = country;
    this.parent = parent;
  }

  public static from(name: string, countryOrParent: Country | Place) {
    if (countryOrParent instanceof Country) {
      return new Place(name, countryOrParent, null);
    } else {
      return new Place(name, countryOrParent.country, countryOrParent);
    }
  }

  public get allParents(): Place[] {
    if (this.parent) {
      return [...this.parent.allParents, this.parent];
    }

    return [];
  }
}
