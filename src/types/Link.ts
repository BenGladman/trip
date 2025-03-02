export class Link {
  public readonly url: URL;

  public readonly icon: string;

  public readonly label: string;

  private constructor(url: URL, icon: string, label: string) {
    this.url = url;
    this.icon = icon;
    this.label = label;
  }

  public static googlePhotos(albumId: string) {
    return new Link(
      new URL(albumId, 'https://photos.google.com/share/'),
      '📷',
      'Photos',
    );
  }
}
