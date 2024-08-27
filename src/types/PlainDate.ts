export class PlainDate {
  public readonly date: Date;
  public readonly string: string;

  private constructor(year: number, month: number, day: number) {
    this.date = new Date(Date.UTC(year, month - 1, day));
    this.string = PlainDate.formatter.format(this.date);
  }

  public daysUntil(other: PlainDate) {
    return Math.round(
      (other.date.valueOf() - this.date.valueOf()) / (24 * 60 * 60 * 1000),
    );
  }

  private static formatter = Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  public static from(year: number, month: number, day: number) {
    const plainDate = new PlainDate(year, month, day);

    if (Number.isNaN(plainDate.date.valueOf())) {
      throw new Error('Invalid date spec');
    }

    return plainDate;
  }
}
