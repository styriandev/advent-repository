export class Entry {
  date: Date;
  text: string;
  longerText: string | undefined;
  videoUrl: string | undefined;
  imageUrl: string | undefined;
  isOpened: boolean = false;


  constructor(date: Date,
              text: string,
              videoUrl?: string | undefined,
              imageUrl?: string | undefined,
              longerText?: string | undefined) {
    this.date = date;
    this.text = text;
    this.videoUrl = videoUrl;
    this.imageUrl = imageUrl;
    this.longerText = longerText;
  }
}
