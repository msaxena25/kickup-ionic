import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'noValueText'
})
export class NoValuePipe implements PipeTransform {
  transform(value: any): any {
    return value ? value : 'N/A';
  }
}