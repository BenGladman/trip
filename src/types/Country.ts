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

  public static from(name: string, continent: Continent, flag: string) {
    return new Country(name, continent, flag);
  }
}
