export class Activity {
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public get buttonLabel() {
    return this.name;
  }

  public static from(name: string) {
    return new Activity(name);
  }
}
