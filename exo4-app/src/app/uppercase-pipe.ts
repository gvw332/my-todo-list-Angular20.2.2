import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }

}
