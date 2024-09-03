import type { Continent } from './Continent';

export class Country {
  public readonly name: string;
  public readonly continent: Continent;
  public readonly flag: string;

  private constructor(name: string, continent: Continent, flag: string) {
    this.name = name;
    this.continent = continent;
    this.flag = flag;
  }

  public get buttonLabel() {
    return `${this.flag} ${this.name}`;
  }

  public static from(name: string, continent: Continent, flag: string) {
    return new Country(name, continent, flag);
  }
}
