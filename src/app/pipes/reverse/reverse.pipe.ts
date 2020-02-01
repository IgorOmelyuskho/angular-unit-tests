import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'string') {
      throw new Error('Parameter in ReversePipe should be string');
    }

    return value.split('').reverse().join('');
  }

}
