import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from './entry';

@Pipe({
  name: 'canBeOpened'
})
export class CanBeOpenedPipe implements PipeTransform {
  transform(value: Entry): boolean {
    return true;
  }
}
