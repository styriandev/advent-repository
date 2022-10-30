export class Entry {
  date: Date;
  text: string;
  longerText: string | undefined;
  videoUrl: string | undefined;
  imageUrl: string | undefined;
  isOpened: boolean = false;
  sanitized: string | undefined;
  showSanitized = false;


  constructor(date: Date,
              text: string,
              videoUrl?: string | undefined,
              imageUrl?: string | undefined,
              longerText?: string | undefined,
              sanitized?: string | undefined) {
    this.date = date;
    this.text = text;
    this.videoUrl = videoUrl;
    this.imageUrl = imageUrl;
    this.sanitized = sanitized;
    this.longerText = longerText;
    if (this.sanitized) {
      this.showSanitized = true;
    }
  }
}
