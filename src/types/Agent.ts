export class Agent {
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public get buttonLabel() {
    return this.name;
  }

  public static from(name: string) {
    return new Agent(name);
  }
}
