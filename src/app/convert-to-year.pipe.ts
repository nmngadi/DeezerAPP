import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToYear'
})
export class ConvertToYearPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    value = value.slice(0, 4);
    return value;
  }
}
