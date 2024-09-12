import type { Place } from './Place';

export class Accommodation {
  public readonly name: string;

  public readonly icon: string;

  public readonly place: Place;

  private constructor(name: string, icon: string, place: Place) {
    this.name = name;
    this.icon = icon;
    this.place = place;
  }

  public get buttonLabel() {
    return `${this.icon} ${this.name}`;
  }

  public static from(name: string, icon: string, place: Place) {
    return new Accommodation(name, icon, place);
  }
}
