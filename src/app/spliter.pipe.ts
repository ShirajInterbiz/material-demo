import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliter'
})
export class SpliterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string[] {
    return value.split(',') 
  }
}
