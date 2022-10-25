import {Injectable} from '@angular/core';
import {Entry} from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  currentSelectedItem: Entry | undefined;

  getItems(): Entry[] {
    return [
      new Entry(new Date(2022, 12, 1), 'Test', undefined, 'image1.jpg'),
      new Entry(new Date(2022, 12, 2), 'Test', 'https://www.youtube.com/watch?v=CcQYj4V2IKw&ab_channel=Marmicode'),
      new Entry(new Date(2022, 12, 3), 'Test'),
      new Entry(new Date(2022, 12, 4), 'Test'),
      new Entry(new Date(2022, 12, 5), 'Test'),
      new Entry(new Date(2022, 12, 6), 'Test'),
      new Entry(new Date(2022, 12, 7), 'Test'),
      new Entry(new Date(2022, 12, 8), 'Test'),
      new Entry(new Date(2022, 12, 9), 'Test'),
      new Entry(new Date(2022, 12, 10), 'Test'),
      new Entry(new Date(2022, 12, 11), 'Test'),
      new Entry(new Date(2022, 12, 12), 'Test'),
      new Entry(new Date(2022, 12, 13), 'Test'),
      new Entry(new Date(2022, 12, 14), 'Test'),
      new Entry(new Date(2022, 12, 15), 'Test'),
      new Entry(new Date(2022, 12, 16), 'Test'),
      new Entry(new Date(2022, 12, 17), 'Test'),
      new Entry(new Date(2022, 12, 18), 'Test'),
      new Entry(new Date(2022, 12, 19), 'Test'),
      new Entry(new Date(2022, 12, 20), 'Test'),
      new Entry(new Date(2022, 12, 21), 'Test'),
      new Entry(new Date(2022, 12, 22), 'Test'),
      new Entry(new Date(2022, 12, 23), 'Test'),
      new Entry(new Date(2022, 12, 24), 'Test'),
    ];
  }
}
