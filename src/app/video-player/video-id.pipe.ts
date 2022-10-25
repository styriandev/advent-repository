import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'videoId'
})
export class VideoIdPipe implements PipeTransform {
  transform(value: string): string {
    const params = new URL(value).searchParams;
    const parameterValue = params.get('v');
    return parameterValue ? parameterValue : '';
  }
}
