export class Activity {
  public readonly name: string;

  public readonly icon: string;

  private constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }

  public get buttonLabel() {
    return `${this.icon} ${this.name}`;
  }

  public static from(name: string, icon: string) {
    return new Activity(name, icon);
  }
}
