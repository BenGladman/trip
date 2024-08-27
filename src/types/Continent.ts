export class Continent {
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static from(name: string) {
    return new Continent(name);
  }
}
