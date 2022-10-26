import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from './entry';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'canBeOpened'
})
export class CanBeOpenedPipe implements PipeTransform {
  transform(value: Entry): boolean {
    return environment.openable || value.date < new Date();
  }
}
